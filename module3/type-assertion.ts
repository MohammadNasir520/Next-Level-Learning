let emni: any;
emni = "nextlevel web dev";

(emni as string).length;

function kgtoGram(param: string | number): string | number {
  if (typeof param == "string") {
    const value = parseFloat(param) * 1000;
    return ` the converted result is : ${value} gram`;
  }
  if (typeof param == "number") {
    const value = param * 1000;
    return value;
  } else {
    return "please provide valid number";
  }
}
