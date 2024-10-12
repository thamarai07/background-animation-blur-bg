import "./style.scss";

let curX: number = 0;
let curY: number = 0;

let tqX: number = 0;
let tqY: number = 0;

document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector<HTMLDivElement>(".gradient__interactive")!;


  function move(){
    curX += (tqX - curX) / 20;
    curY += (tqY - curY) / 20;

    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;

    requestAnimationFrame(()=>{
      move()
    })

  }

  window.addEventListener("mousemove", (event) => {
    tqX = event.clientX;
    tqY = event.clientY;
  });

  move();
});
