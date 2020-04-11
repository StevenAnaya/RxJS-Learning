# ReactiveX con RxJS

**¿Cuándo usar Rx?**

- Eventos de la interfaz de usuario.
- Cuando es necesario notificar de cambios en un objeto(s).
- Comunicaciones por sockets.
- Cuando necesitamos trabajar con flujo de información (Streams).

El patrón ReactiveX o Observable tiene 3 conceptos fundamentales que lo componen. Ellos son:

1. Observables
   - Son la fuente de información
   - Pueden emitir multiples valores, sólo uno o ninguno.
   - Pueden emitir errores.
   - Pueder ser infinitos, finitos (Completarse).
   - Pueden ser síncronos o asíncronos.
2. Subscribers
   - Se suscriben a un Observable, es decir, están pendientes de lo que realiza el Observable.
   - Consumen / Observan la data del Observable.
   - Pueden recibir errores y eventos del Observable.
   - Desconocen todo lo que se encuentra detrás del Observable.
3. Operators
   - Usados para transformar Observables (map, group, scan…)
   - Usados para filtrar observables (filter, distinct, skip, debound…)
   - Usados para combinar observables
   - Usados para crear nuevos observables

**Beneficios de la programación reactiva**

1. Evitar el "Callback Hell"
2. Trabajar de forma simple tareas sincrónas y asíncronas.
3. Uso de operadores para reducir y simplificar el trabajo.
4. Es fácil transformar los flujos (Streams) de información.
5. Código más limpio y fácil de leer.
6. Fácil de implementar.
7. Fácil anexar procedimientos sin alterar el producto final.

**Patrones y paradigmas usados por ReactiveX**

1. Observer Pattern:

   - Notificar cuando suceden cambios.

2. Iterator Pattern

   - Poder ejecutar operaciones secuenciales.

3. Programación funcional
   - Tener funciones con tareas específicas que reciban argumentos y no muten la información

## Primer Observable

Los Observables son objetos que puede emitir multiples valores, uno o ninguno. En este punto debemos saber que el observable `obs$` puede emitir valores usando el metodo `next([valor])`el cual se verá reflejado en su salida. Al mismo tiempo, el metodo`complete()` le permite notificar que no emitirá ningun valor más en su salida aunque, puede que el este notificandolos.

! [Observable] (img/Screenshot_2020-04-11 ReactiveX - RxJs De cero hasta los detalles.png)
