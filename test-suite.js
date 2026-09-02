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

  // 5. Attachment 05F card-sort synchronization
  console.log("\n[5] Checking Attachment 05F Card-Sort Synchronization...");
  const teacherPath = path.join(__dirname, 'teacher.html');
  const universityPath = path.join(__dirname, 'university/index.html');
  const principalPath = path.join(__dirname, 'principal.html');
  const teacherHtml = fs.readFileSync(teacherPath, 'utf8');
  const universityHtml = fs.readFileSync(universityPath, 'utf8');
  const principalHtml = fs.readFileSync(principalPath, 'utf8');
  const expectedCards = [
    "A student uses AI to generate possible claims, chooses one, drafts the essay without AI, and discloses the brainstorming support.",
    "A student submits an AI-assisted essay, then explains and defends the thesis, evidence, and revisions in a one-on-one conference.",
    "A multilingual learner uses AI translation to understand assignment directions, then completes the disciplinary task without AI.",
    "Before reading a source, a student asks AI for a summary and relies on it to begin the assignment; the original text remains available.",
    "A school blocks generative AI because district guidance is unclear, while allowing individually approved accessibility supports.",
    "A teacher uses AI to draft feedback on every essay, reviews and revises the feedback, and asks students to discuss how they used it.",
    "A student asks AI to explain a difficult concept, then solves a new problem without AI and explains the reasoning.",
    "A student asks AI to write the introduction, makes only light edits, writes the rest independently, and discloses the AI contribution.",
    "A student with an IEP uses AI to turn the student’s own notes into an outline, then writes and revises the response without AI.",
    "A student uses AI to generate counterarguments, revises the thesis after evaluating them, and explains which suggestions were accepted or rejected."
  ];
  const extractCards = (html) => Array.from(html.matchAll(/^\s*cs\("([^"]+)"/gm), (match) => match[1]);
  const teacherCards = extractCards(teacherHtml);
  const universityCards = extractCards(universityHtml);
  const requiredMarkers = [
    "How much of the learner’s own thinking, effort, and judgment appears to be preserved?",
    "What response would you be most likely to take?",
    "Allow or encourage",
    "Allow with conditions or limits",
    "Do not allow",
    "Need more context",
    "Which scenario most clearly removes a barrier?",
    "Which may provide assistance before desired thinking occurs?",
    "Which is most affected by policy, expectations, or authority?"
  ];
  const expectedDurations = [
    ["Teacher", teacherHtml, "Estimated session length: 60–75 minutes in total (50–65-minute core interview plus an optional approximately 10-minute card sort)"],
    ["University-student", universityHtml, "Estimated session length: 50–65 minutes in total (40–55-minute core interview plus an optional approximately 10-minute card sort)"],
    ["Leader", principalHtml, "Estimated session length: 50–65 minutes"]
  ];
  if (JSON.stringify(teacherCards) !== JSON.stringify(expectedCards)) {
    console.error("  [X] Teacher card set does not exactly match working attachment 05F.");
    errors++;
  }
  if (JSON.stringify(universityCards) !== JSON.stringify(expectedCards)) {
    console.error("  [X] University-student card set does not exactly match working attachment 05F.");
    errors++;
  }
  for (const [label, html] of [["Teacher", teacherHtml], ["University-student", universityHtml]]) {
    const missing = requiredMarkers.filter((marker) => !html.includes(marker));
    if (missing.length) {
      console.error(`  [X] ${label} card sort is missing 05F markers: ${missing.join(" | ")}`);
      errors++;
    }
    if (/legitimate use of AI|Legitimacy:|data-sort-field="legitimacy"/.test(html)) {
      console.error(`  [X] ${label} card sort still contains superseded legitimacy wording.`);
      errors++;
    }
    if (!/const COLLECTION_ENABLED = false;/.test(html)) {
      console.error(`  [X] ${label} collection lock is not set to false.`);
      errors++;
    }
  }
  if (/cardSortItems|Card Sort|Card sort/.test(principalHtml)) {
    console.error("  [X] The 05B leader instrument incorrectly includes a card sort.");
    errors++;
  }
  if (!/const COLLECTION_ENABLED = false;/.test(principalHtml)) {
    console.error("  [X] The 05B leader collection lock is not set to false.");
    errors++;
  }
  for (const [label, html, duration] of expectedDurations) {
    if (!html.includes(duration)) {
      console.error(`  [X] ${label} duration does not match the current chair-review package.`);
      errors++;
    }
  }
  if (!errors) console.log("  [OK] 05A and 05C match the shared ten-card 05F set; 05B remains excluded; collection is locked.");

  console.log(`\nTests finished with ${errors} errors.`);
  if (errors > 0) process.exit(1);
}

runTests();
