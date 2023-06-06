let emni: any;
emni = "nextlevel web dev";

(emni as string).length;

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param == "string") {
    const value = parseFloat(param) * 1000;
    return ` the converted result is : ${value} gram`;
  }
  if (typeof param == "number") {
    const value = param * 1000;
    return value;
  }
}

const resultToBeNumber = kgToGram(1000) as number;
