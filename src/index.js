import print from "./second";
import "./index.scss";

const obj = {
  a: 10,
};
const clone = { ...obj };

console.log(obj, clone);
print();
