type User = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
} // interface is mostly used for object type data type

const userWithTypeAlias: User = {
  name: "Typealias",
  age: 324,
};

const userWithInterface: IUser = {
  name: "interface",
  age: 334,
};
