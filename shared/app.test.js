import { slug, q, r, cs } from './app.js';
import assert from 'node:assert';

function runTests() {
  console.log("Running app.js tests...");
  let passed = 0;
  let failed = 0;

  function test(name, fn) {
    try {
      fn();
      passed++;
      console.log(`✅ ${name}`);
    } catch (err) {
      failed++;
      console.error(`❌ ${name}`);
      console.error(`   ${err.message}`);
    }
  }

  // 1. q() Contract
  test("q() creates well-formed object", () => {
    const obj = q("q1", "Prompt", "text", null, ["tag1"]);
    assert.strictEqual(obj.id, "q1");
    assert.strictEqual(obj.text, "Prompt");
    assert.strictEqual(obj.type, "text");
    assert.strictEqual(obj.options, null);
    assert.deepStrictEqual(obj.tags, ["tag1"]);
  });

  // 2. r() Contract
  test("r() creates well-formed object", () => {
    const obj = r("r1", "Primary text", "Follow-up text", ["tag1"]);
    assert.strictEqual(obj.id, "r1");
    assert.strictEqual(obj.text, "Primary text");
    assert.strictEqual(obj.followUp, "Follow-up text");
    assert.deepStrictEqual(obj.tags, ["tag1"]);
  });

  // 3. cs() Contract
  test("cs() generates slug ID and creates well-formed object", () => {
    const obj = cs("This is a Card", ["tag1"]);
    assert.strictEqual(obj.id, "this-is-a-card");
    assert.strictEqual(obj.text, "This is a Card");
    assert.deepStrictEqual(obj.tags, ["tag1"]);
  });

  // 4. slug() Collision and Edge Cases
  test("slug() handles capitalization identically", () => {
    assert.strictEqual(slug("Hello World"), slug("hello world"));
  });

  test("slug() handles punctuation and apostrophes identically", () => {
    assert.strictEqual(slug("It's a test!"), "it-s-a-test");
  });

  test("slug() handles hyphens and dashes identically", () => {
    assert.strictEqual(slug("hello-world"), "hello-world");
    assert.strictEqual(slug("hello—world"), "hello-world"); // em dash
  });

  test("slug() collapses repeated spaces and punctuation", () => {
    assert.strictEqual(slug("hello   world!!!"), "hello-world");
  });

  test("slug() truncates at 54 characters", () => {
    const longText = "This is a very long string that should be truncated by the slug function because it exceeds the length limit";
    const result = slug(longText);
    assert.strictEqual(result.length, 54);
    assert.strictEqual(result, "this-is-a-very-long-string-that-should-be-truncated-by");
  });

  test("slug() identical long inputs up to 54 chars will collide (Warning behavior)", () => {
    const text1 = "This is a very long string that should be truncated by AAAAAA";
    const text2 = "This is a very long string that should be truncated by BBBBBB";
    assert.strictEqual(slug(text1), slug(text2));
  });

  test("slug() handles empty or punctuation-only strings", () => {
    assert.strictEqual(slug(""), "empty-slug");
    assert.strictEqual(slug(null), "empty-slug");
    assert.strictEqual(slug("!!!"), "empty-slug");
  });

  test("slug() duplicate exact inputs will collide (Warning behavior)", () => {
    assert.strictEqual(slug("Same Prompt"), slug("Same Prompt"));
  });

  console.log(`\nTests finished: ${passed} passed, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

runTests();
