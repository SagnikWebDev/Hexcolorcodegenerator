function randomNumber() {
  let previsousNumber = 0;
  let currentNumber = 0;
  let i = 0;
  while (i == 0) {
    const max = 16;
    const min = 0;
    const Number = Math.floor(Math.random() * (max - min) + min);
    if (previsousNumber == Number) continue;
    else {
      i = 1;
      previsousNumber = Number;
      currentNumber = Number;
    }
  }
  if (currentNumber > 9) {
    const obj = [
      {
        num: 10,
        alpha: "a",
      },
      {
        num: 11,
        alpha: "b",
      },
      {
        num: 12,
        alpha: "c",
      },
      {
        num: 13,
        alpha: "d",
      },
      {
        num: 14,
        alpha: "e",
      },
      {
        num: 15,
        alpha: "f",
      },
    ];

    const findalpha = obj.filter((val) => {
      return val.num == currentNumber;
    });
    return findalpha[0].alpha;
  } else return currentNumber;
}
function hexcolorgen() {
  let hexcolor = "#";
  for (let i = 1; i <= 6; i++) {
    const num = randomNumber();
    hexcolor += String(num);
  }
  return hexcolor;
}
const bars = document.querySelectorAll(".bars");
const btn = document.querySelector(".btn");
bars.forEach((val) => {
  const hexcolorcode = hexcolorgen();
  val.style.background = `${hexcolorcode}`;
  val.lastElementChild.innerText = `${hexcolorcode}`;
});
btn.addEventListener("click", () => {
  bars.forEach((val) => {
    const hexcolorcode = hexcolorgen();
    val.style.background = `${hexcolorcode}`;
    val.lastElementChild.innerText = `${hexcolorcode}`;
  });
});
fetch("https://api.color.pizza/v1/?values=aaffcc")
  .then((e) => e.json())
  .then((e) => console.log(e));
