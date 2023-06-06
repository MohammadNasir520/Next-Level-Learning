const createArray = (param: string): string[] => {
  return [param];
};
// Generic use in Arrow function
const createArray1 = <T>(param: T): T[] => {
  return [param];
};

const result = createArray("Bangladesh");
const result1 = createArray1<string>("Bangladesh");

// generic interface in function with multiple params
const createArray2 = <x, y>(param1: x, param2: y): [x, y] => {
  return [param1, param2];
};

const result2 = createArray2<string, string>(
  "Bangladesh",
  "I love my country very much"
);
