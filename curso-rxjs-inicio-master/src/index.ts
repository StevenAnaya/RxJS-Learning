import { from } from "rxjs";

const observer = {
  next: (val) => console.log(val),
};

const generator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const myIterable = generator();

//ejecuta el iterable y me devuelve todos los valores
from(myIterable).subscribe(observer);

//ejecuta la promesa y me devuelve el resultado
from(fetch("https://miUrl.com/")).subscribe(observer);
