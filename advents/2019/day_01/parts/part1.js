export const fuleRequired = (moduleMass) => {
  return Math.floor(parseInt(moduleMass) / 3) - 2;
};

const readModules = (path) => {
  return Deno.readTextFileSync(path).split("\n");
};

export const main = (path) => {
  const modules = readModules(path);
  return modules.reduce((totalFuel, module) => {
    return totalFuel + fuleRequired(module);
  }, 0);
};

console.log(main("./day_01/inputs/inputs1.txt"));
