type User = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
} // interface is mostly used for object type data type

// We can extend interface.
// example
interface IExtendedUser extends IUser {
  role: string;
}

const userWithTypeAlias: User = {
  name: "Typealias",
  age: 324,
};

const userWithInterface: IUser = {
  name: "interface",
  age: 334,
};

const user: IExtendedUser = {
  name: "extends interface",
  age: 34,
  role: "interface",
};
