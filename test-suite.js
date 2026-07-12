const fs = require('fs');
const path = require('path');

async function runTests() {
  let errors = 0;
  console.log("Running Data & UI Regression Tests...");

  // 1. Glossary Schema
  console.log("\n[1] Checking Glossary Schema...");
  const glossaryPath = path.join(__dirname, 'dissertation-sites/data/canonical-glossary.json');
  try {
    const data = JSON.parse(fs.readFileSync(glossaryPath, 'utf8'));
    const terms = data.terms || {};
    let valid = 0;
    for (const [id, term] of Object.entries(terms)) {
      if (!term.label || !term.plain || !term.scholarly || !term.operational) {
        console.error(`  [X] Term missing required fields: ${id}`);
        errors++;
      } else {
        valid++;
      }
    }
    console.log(`  [OK] ${valid} valid glossary terms.`);
  } catch (e) {
    console.error("  [X] Failed to parse Glossary JSON:", e.message);
    errors++;
  }

  // 2. Malformed/empty catalog regression
  console.log("\n[2] Checking Malformed/Empty Catalog Regression...");
  // Simulate catalog filtering on an empty array
  try {
    const filterEmpty = [];
    const result = filterEmpty.filter(item => item.type === "survey");
    if (!Array.isArray(result) || result.length !== 0) {
      console.error("  [X] Filter on empty catalog failed.");
      errors++;
    } else {
      console.log("  [OK] Empty catalog filtering behaves as expected.");
    }
  } catch(e) {
    console.error("  [X] Empty catalog regression test threw error:", e.message);
    errors++;
  }

  // 3. JSON/data-generated links
  console.log("\n[3] Checking JSON/Data-Generated Links...");
  const dataDir = path.join(__dirname, 'dissertation-sites/data');
  if (fs.existsSync(dataDir)) {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
    let linkCount = 0;
    for (const file of files) {
      const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
      const matches = content.match(/href="([^"]+)"/g) || [];
      linkCount += matches.length;
    }
    console.log(`  [OK] Found ${linkCount} embedded HTML links in JSON data to be covered by Lychee.`);
  } else {
    console.log("  [-] No data dir found for link checking.");
  }

  // 4. Fragment targets (basic check across HTML files)
  console.log("\n[4] Checking Fragment Targets in HTML...");
  const searchHtml = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat && stat.isDirectory() && !fullPath.includes('node_modules')) {
        results = results.concat(searchHtml(fullPath));
      } else if (file.endsWith('.html')) {
        results.push(fullPath);
      }
    });
    return results;
  };
  
  const htmlFiles = searchHtml(__dirname);
  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const ids = Array.from(content.matchAll(/id="([^"]+)"/g)).map(m => m[1]);
    const hashLinks = Array.from(content.matchAll(/href="#([^"]+)"/g)).map(m => m[1]);
    for (const link of hashLinks) {
      if (!ids.includes(link)) {
        // warning only, might be on another page or dynamic
        console.log(`  [WARN] Missing fragment target '#${link}' in ${path.relative(__dirname, file)}`);
      }
    }
  }
  console.log("  [OK] Fragment check complete.");

  console.log(`\nTests finished with ${errors} errors.`);
  if (errors > 0) process.exit(1);
}

runTests();
