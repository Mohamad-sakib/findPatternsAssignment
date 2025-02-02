export const fuleRequired = (moduleMass) => {
  const requiredFuel = Math.floor(parseInt(moduleMass) / 3) - 2;

  if (requiredFuel < 0) {
    return 0;
  }

  return requiredFuel + fuleRequired(requiredFuel);
};

const readModules = (path) => {
  return Deno.readTextFileSync(path).split("\n");
};

const requiredFuel = (totalFuel, module) => {
  // console.log(module, fuleRequired(module));
  return totalFuel + fuleRequired(module);
};

export const main = (path) => {
  const modules = readModules(path);
  const totalFuel = modules.reduce(requiredFuel, 0);

  return totalFuel;
};

console.log(main("./day_01/inputs/inputs1.txt"));
