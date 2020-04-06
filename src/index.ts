import { Game } from "./level.ts";

// function createStyle(
//   width: number,
//   height: number,
//   numberOfColumns: number,
//   numberOfRows: number
// ) {
//   let middle = width / numberOfColumns / 2 - 30;
//   let verticalCenter = height / numberOfRows / 2 - 15;

//   document.getElementById("app").innerHTML = `

//   <style>
//   #robot {
//     width: 60px;
//     height: 30px;
//     left: ${middle};
//     top: ${verticalCenter};
//     position: relative;

//     background-image: url("./public/car3.png");
//     background-size: 60px 30px;
//   }

//   </style>

//   <h1>Go Robot</h1>
//   <div style="position: relative;">
//    <canvas id="layer1" width="${width}" height="${height}"
//      style="position: absolute; left: 0; top: 0; z-index: 0;"></canvas>

//     <div id="robot"> </div>
//    </div>
//   `;
// }

// createStyle(300, 300, 4, 4);

// let canvas1 = document.getElementById("layer1") as HTMLCanvasElement;
// let canvas2 = document.getElementById("robot") as HTMLCanvasElement;
// let l = new Level([canvas1, canvas2], 4, 4);

// l.draw();

let game = new Game(400, 400, 3, 3);
let level = game.makeLevel(document.getElementById("app") as HTMLElement);
let robot = level.robot;

// Vanaf hier is de student aan de beurt
robot.forward();
robot.turn();
robot.forward();
robot.turn();
robot.forward();
robot.turn(-1);
robot.forward();
robot.turn(-1);
robot.forward();
robot.forward();

robot.go();
