//object types
const user: {
  name: string;
  age: number;
  isMarried: boolean;
} = {
  name: "Nasir",
  age: 25,
  isMarried: false,
};

// type alias
type user = {
  readonly name: string; // readonly value cannot be changed
  age?: number; // optional ? sign means it's value may or may not be exist
  isMarried: boolean;
};

const user2: user = {
  name: "Rahat",
  age: 25,
  isMarried: true,
};

//implicit type
const student1 = "Maznu"; // TypeScript infers 'student1' as type 'string' automatically if value changes type also be automatically will change

const marks1 = 25; // TypeScript infers 'marks1' as type 'number'

//Explicit Type
const student2: string = "Maznu"; // specifically set the  type as string and can't set any value without string

const marks2: number = 25; // specifically set the type as 'number'  and can't set any value without number
