// a type is depend on another type is called conditional type

type a1 = string;
type a2 = a1 extends string ? string : null;
