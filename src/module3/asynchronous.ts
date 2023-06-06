// const makePromise = (): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const data = " data is fetched";
//     if (data) {
//       resolve(data);
//     } else reject("fail to fetched data");
//   });
// };

// const getPromiseData = async (): Promise<string> => {
//   const data = await makePromise();
//   return data;
// };

// data fetcheing by json place holder

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const getTodo = async (): Promise<ITodo> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await response.json();
  return data;
};

const getTodoData = async () => {
  const result = await getTodo();
  console.log(result);
};

getTodoData();
