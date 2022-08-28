import { fromEvent } from "rxjs";
import * as RX from "./create";

var btn = document.querySelector("#mybtn");
fromEvent(btn, "click").subscribe(() => {
  RX.observable.subscribe((res) => {
    console.log(res);
  });
});
