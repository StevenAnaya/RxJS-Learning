import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
   next: value => console.log(value),
   error: error => console.error(error),
   complete: () => console.info('Complete');
}

const obs$ = new Observable<string>((subscriber) => {
  subscriber.next("Hola");
  subscriber.next("Mundo");

  subscriber.next("Hola");
  subscriber.next("Mundo");

  // Esto genera un error
  let a = undefined;
  a.nomber = 'nombre';

  subscriber.complete();

  subscriber.next("Hola");
  subscriber.next("Mundo");
});

obs$.subscribe(observer);