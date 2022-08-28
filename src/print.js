export const print = (v) => {
  const el = document.createElement("h3");
  el.innerText = "🔵 " + v;
  el.classList.add("item");
  document.body.appendChild(el);
};
