/* countries.js */
/**
 * @param {string[]} countries
 */
export function getDropdown(countries) {
  let text = "<option value=''>Please select</option>";
  countries.forEach(function (country) {
    text +=
      "<option value='" + country.toLowerCase() + "'>" + country + "</option>";
  });
  return text;
}
