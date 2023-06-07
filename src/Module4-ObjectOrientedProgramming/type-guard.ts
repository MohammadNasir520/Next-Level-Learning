// keyof guard

type Alphanumeric = string | number;

function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 === "number" && typeof param2 == "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

// console.log(add(1, 4));
// console.log(add(1, "4"));

// in guard
type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};
function getUser(user: NormalUserType | AdminUserType) {
  if ("role" in user) {
    return ` hello My role is ${user.role}`;
  } else {
    return ` I am  a norma user`;
  }
}
const normalUser1: NormalUserType = { name: " mr. Kallu" };
const adminUser1: AdminUserType = { name: "mr. Gallu", role: "admin" };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));
