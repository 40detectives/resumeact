/* import { createRequire } from "module";
const require = createRequire(import.meta.url);

export default async (
  page,
  scenario,
  viewport,
  isReference,
  browserContext
) => {
  await require("./loadCookies")(browserContext, scenario);
}; */

module.exports = async (
  page,
  scenario,
  viewport,
  isReference,
  browserContext
) => {
  await require("./loadCookies.cjs")(browserContext, scenario);
};
