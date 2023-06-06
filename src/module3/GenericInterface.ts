// // Generic interface
// interface CrushInterface<T, u> {
//   name: string;
//   husband: T;
//   age: u;
// }

// const crush1: CrushInterface<boolean, number> = {
//   name: "kate winslet",
//   husband: true,
//   age: 90,
// };

// const crush2: CrushInterface<string, string> = {
//   name: "kate winslet",
//   husband: "parsian",
//   age: "thirty",
// };

// // const rollNumber: number[] = [34, 343, 645];
// // const rollNumber2: string[] = ["34", "34", "35"];

// // // we can also define array like this

// // // const rollNumbers: Array<number> = [34, 645, 56];
// // // const rolNumbers2: Array<string> = ["345", "12", "56"];

// // // const userNameAndRollNumber: Array<{ name: string; roll: number }> = [
// // //   {
// // //     name: "mr.x",
// // //     roll: 1,
// // //   },
// // //   {
// // //     name: "mr.y",
// // //     roll: 2,
// // //   },
// // // ];

// // //................................... Generic array..........................

// // type GenericArray<T> = Array<T>;

// // const rollNumbers: GenericArray<number> = [34, 645, 56];
// // const rolNumbers2: GenericArray<string> = ["345", "12", "56"];

// // type NameRollType = { name: string; roll: number };

// // const userNameAndRollNumber: GenericArray<NameRollType> = [
// //   {
// //     name: "mr.x",
// //     roll: 1,
// //   },
// //   {
// //     name: "mr.y",
// //     roll: 2,
// //   },
// // ];
// // type GenericTuple<x, y> = [x, y];
// // const relation: GenericTuple<string, number> = ["salary", 870000];
