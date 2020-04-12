import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log(value),
  error: (error) => console.warn(error),
  complete: () => console.log("Completado"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  let counter = 0;

  const interval = setInterval(() => {
    counter++;
    subscriber.next(counter);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  };
});

const subs = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

//Encadena los Observers y nos permite operarlos desde el principal
subs.add(subs2).add(subs3);

setTimeout(() => {
  // Termina la subscripcion de todos los Observers encadenados
  subs.unsubscribe();

  console.log("completado timeout");
}, 5000);
