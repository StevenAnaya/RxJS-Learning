import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log(value),
  error: (error) => console.warn(error),
  complete: () => console.log("Completado"),
};

const interval$ = new Observable((subscriber) => {
  const intervalID = setInterval(() => subscriber.next(Math.random()), 1000);
  return () => {
    clearInterval(intervalID);
    console.log("intervalo destruido");
  };
});

const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  // Lo podemos hacer debido a Subject es un Observable.
  subject$.next(10);
  subject$.complete();

  subscription.unsubscribe();
}, 3500);
