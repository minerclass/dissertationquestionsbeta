const fs = require('fs');
const path = require('path');
const https = require('https');

const glossaryPath = path.join(__dirname, 'dissertation-sites/data/canonical-glossary.json');

try {
  const data = JSON.parse(fs.readFileSync(glossaryPath, 'utf8'));
  const terms = data.terms || {};
  const termKeys = Object.keys(terms);
  console.log(`Checking ${termKeys.length} terms in glossary JSON...`);
  
  let valid = 0;
  let errors = 0;
  
  for (const id of termKeys) {
    const term = terms[id];
    if (!id || !term.label) {
      console.error(`Term missing ID or label: ${id}`);
      errors++;
    }
    if (!term.plain || !term.scholarly || !term.operational) {
      console.error(`Term missing required definitions: ${term.id}`);
      errors++;
    }
    valid++;
  }
  
  console.log(`Validation complete. ${valid} valid terms, ${errors} errors.`);
  if (errors > 0) process.exit(1);
} catch (e) {
  console.error("Failed to parse JSON:", e);
  process.exit(1);
}
