/* import { createRequire } from "module";
const require = createRequire(import.meta.url);

export default async (
  page,
  scenario,
  viewport,
  isReference,
  browserContext
) => {
  console.log("SCENARIO > " + scenario.label);
  await require("./clickAndHoverHelper")(page, scenario);

  // add more ready handlers here...
}; */

module.exports = async (
  page,
  scenario,
  viewport,
  isReference,
  browserContext
) => {
  console.log("SCENARIO > " + scenario.label);
  await require("./clickAndHoverHelper.cjs")(page, scenario);

  // add more ready handlers here...
};
