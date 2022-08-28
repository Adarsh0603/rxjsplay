import { Observable } from "rxjs";

export const observable = new Observable((subscriber) => {
  subscriber.next(3);
  subscriber.next(2);
  subscriber.next(1);
});
