import {
  fromEvent,
  from,
  of,
  interval,
  Observable,
  share,
  shareReplay,
  Subject,
  timer,
  BehaviorSubject,
} from "rxjs";
import {
  map,
  filter,
  scan,
  take,
  tap,
  debounceTime,
  switchMap,
  catchError,
  takeWhile,
  takeUntil,
} from "rxjs/operators";
import { print } from "./print";

// 👉 of
// const obs = of("adarsh");
// obs.subscribe(print);

// 👉 from
// const obs = from("adarsh");
// obs.subscribe(print);

// 👉 fromEvent
// const obs = fromEvent(document, "click");
// obs.subscribe(print);

// 👉 interval
// const obs = interval(500);
// obs.subscribe(print);

// 👉👉 HOT vs COLD
//Cold gives different values on different subscriptions

// const cold = new Observable((subs) => {
//   subs.next(Math.random());
// });
// cold.subscribe(print);
// cold.subscribe(print);

// Hot gives same value on different subscriptions

// const hot = cold.pipe(shareReplay(1));
// hot.subscribe(print);
// hot.subscribe(print);

// 👉 Subjects
// const subject = new Subject();
// subject.subscribe(print);
// subject.next(1);
// subject.next(2);
// subject.next(2);

// 👉 BehaviourSubject
// const bs = new BehaviorSubject(1);
// bs.subscribe(print);
// bs.next(3);
// bs.next(2);

// ✨✨ Operators
// 👉 scan,filter,map,take
// const obs = from([1, 2, 3, 4, 5, 6, 7, 8]);
// const modified = obs.pipe(
//   scan((acc, val) => acc + val),
//   filter((val) => val % 2 === 0),
//   map((val) => val * 2),
//   take(3)
// );
// modified.subscribe(print);

// 👉tap
// const obs = of("🦁Adarsh");
// const modified = obs.pipe(
//   tap(print),
//   map((v) => v.toUpperCase()),
//   tap(print)
// );
// modified.subscribe();

// ✨✨BackPressure
// const event = fromEvent(document, "mousemove");
// const debounced = event.pipe(debounceTime(1000));
// debounced.subscribe(print);

// 👉Switchmap

// const user$ = of({ uid: Math.random() });

// const fetchData = (userid) => {
//   return of(`${userid}'s Data`);
// };

// const orders$ = user$.pipe(
//   switchMap((user) => {
//     return fetchData(user.uid);
//   })
// );

// orders$.subscribe(print);

// 👉 catchError
// const subject = new Subject();
// subject.pipe(catchError(print)).subscribe(print);

// subject.next(1);
// subject.next(2);
// subject.error("oops");

// ✨✨ Memory Leak Handlers
// 👉takeWhile
// const source = interval(100);
// const ex = source.pipe(takeWhile((v) => v < 10));
// ex.subscribe(print);

// 👉takeUntil
// const source = interval(100);
// const ex = source.pipe(takeUntil(timer(2000)));
// ex.subscribe(print);
