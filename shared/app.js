/**
 * Creates a Quick Response Question object.
 * @param {string} id - Stable identifier for the question (e.g. 'q1', 't-q1').
 * @param {string} text - The prompt text.
 * @param {string} type - Input type (e.g., 'text', 'radio').
 * @param {Array<string>|null} options - Array of options if type is 'radio' or 'checkbox'.
 * @param {Array<string>} tags - Relevant conceptual tags.
 * @returns {Object} Quick Response Question object.
 */
export function q(id, text, type, options, tags) { 
  return { id, text, type, options, tags }; 
}

/**
 * Creates a Reflection Question object.
 * @param {string} id - Stable identifier for the reflection (e.g. 'r1', 't-r1').
 * @param {string} text - The primary reflection prompt.
 * @param {string} followUp - Secondary prompt or clarification.
 * @param {Array<string>} tags - Relevant conceptual tags.
 * @returns {Object} Reflection Question object.
 */
export function r(id, text, followUp, tags) { 
  return { id, text, followUp, tags }; 
}

/**
 * Creates a Card Sort Item object.
 * @param {string} text - The content of the card.
 * @param {Array<string>} tags - Relevant conceptual tags.
 * @returns {Object} Card Sort Item object with an auto-generated slug ID.
 * Note: The generated slug ID is intended as a readable anchor for presentation.
 * It is not guaranteed to be globally unique. For durable export keys, explicit IDs are preferred.
 */
export function cs(text, tags) { 
  return { id: slug(text), text, tags }; 
}

/**
 * Generates a stable URL-friendly and JSON-friendly slug from text.
 * Truncates at 54 characters. 
 * WARNING: This function does not guarantee uniqueness. Identical inputs,
 * or inputs that are identical up to 54 characters, will collide.
 * Do not use for primary unique identifiers or durable export keys.
 * @param {string} text - The text to slugify.
 * @returns {string} The resulting slug.
 */
export function slug(text) { 
  if (!text) return "empty-slug";
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 54) || "empty-slug"; 
}
