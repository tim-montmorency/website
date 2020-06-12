/**
 * tryParseJSON
 * @param {string} jsonString - The string to parse as JSON
 * @return {object|boolean} The Object corresponding to the given JSON text or false
 *
 * @example
 * tryParseJSON('foo'); // return false
 * tryParseJSON('{"p": 5}'); // return {p: 5}
 */
export default function tryParseJSON(jsonString) {
  try {
    const o = JSON.parse(jsonString);

    // Handle non-exception-throwing cases:
    // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
    // but... JSON.parse(null) returns null, and typeof null === 'object',
    // so we must check for that, too. Thankfully, null is falsey, so this suffices:
    if (o && typeof o === 'object') {
      return o;
    }
  } catch (e) {} // eslint-disable-line no-empty

  return false;
}
