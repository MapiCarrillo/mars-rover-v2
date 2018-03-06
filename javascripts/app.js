// Rover Object Goes Here
var robot ={
  direction: 'N',
  position: [0,0],
  travelLog: [],
  ob1: [2,9],
  ob2: [2,5],
  ob3: [3,7],
  ob4: [6,8],
  ob5: [9,0]
}
var robot2 ={
  direction: 'N',
  position: [1,0],
  travelLog: [],
  ob1: [2,9],
  ob2: [2,5],
  ob3: [3,7],
  ob4: [6,8],
  ob5: [9,0]
}

// ======================
var tablero = [
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
];
for (var x = 0; x < 10; x++){
var row = tablero[x];
for (var y = 0; y < 10; y++){
  var column = row[y];
}
}

// ======================
function turnLeft(rover){
  switch (rover.direction){
    case 'N':
    rover.direction = "W";
    break;
    case 'W':
    rover.direction = "S";
    break;
    case 'S':
    rover.direction = "E";
    break;
    case 'E':
    rover.direction = "N";
    break;
  }
  console.log("La dirección del Rover es: ", rover.direction);
}
function turnRight(rover){
  switch (rover.direction){
    case 'N':
    rover.direction = "E";
    break;
    case 'E':
    rover.direction = "S";
    break;
    case 'S':
    rover.direction = "W";
    break;
    case 'W':
    rover.direction = "E";
    break;
  }
  console.log("La dirección del Rover es:", rover.direction);
}
function moveForward(rover){
  switch (rover.direction){
    case "W":
    rover.position[0]--;
      if(rover.position[0]<0) rover.position[0] = 9;
      break;
    case "N":
    rover.position[1]++;
       if(rover.position[1]>9) rover.position[1] = 0;
      break;
    case "S":
    rover.position[1]--;
        if(rover.position[1]<0) rover.position[1] = 9;
      break;
    case "E":
    rover.position[0]++;
        if(rover.position[0]>9) rover.position[0] = 0;
      break;
  }
  console.log("El Rover está en: ", rover.position)
  }
function moveBackward(rover){
  switch (rover.direction){
    case "W":
    rover.position[0]++;
    if(rover.position[0]>9)rover.position[0] = 0;
    break;
    case "N":
    rover.position[1]--;
    if(rover.position[1]<0) rover.position[1] = 9;
    break;
    case "S":
    rover.position[1]++;
    if(rover.position[1]>9) rover.position [1] = 0;
    break;
    case "E":
    rover.position[0]--;
    if(rover.position[0]<0) rover.position[0] = 9;
    break;

  }
  console.log("El Rover está en: ", rover.position)
}

function commands (rover, inst){
for(var i = 0; i < inst.length ; i++){
  var instrucciones = inst[i];
  
  switch(instrucciones){
    case "f":
    moveForward(rover);
    stopObstacles(rover);
    crash(rover1, rover2);
    rover.travelLog.push("Casilla:[" , rover.position[0], rover.position[1],"]");
    break;
    case "r":
    turnRight(rover);
    break;
    case "l":
    turnLeft(rover);
    break;
    case "b":
    moveBackward(rover);
    stopObstacles(rover);
    crash(rover1, rover2);
    rover.travelLog.push("Casilla: [", rover.position[0], rover.position[1], "]");
    break;
    default:
    console.log("Los movimientos solo pueden ser f, r, l o b");
  }
}
console.log(rover.travelLog);
}
function stopObstacles (rover){
  if (
      (rover.ob1[0] === rover.position[0]) && (rover.ob1[1] === rover.position[1]) || 
      (rover.ob2[0] === rover.position[0]) && (rover.ob2[1] === rover.position[1]) || 
      (rover.ob3[0] === rover.position[0]) && (rover.ob3[1] === rover.position[1]) || 
      (rover.ob4[0] === rover.position[0]) && (rover.ob4[1] === rover.position[1]) || 
      (rover.ob5[0] === rover.position[0]) && (rover.ob5[1] === rover.position[1])
    ){
    moveBackward(rover);
    console.log("Obstáculo. Otro movimiento");
  }
}
function crash(rover1, rover2){
  if (
    (rover1.position[0] === rover2.position[0]) && (rover1.position[1] === rover2.position[1])
  ){
    console.log ("El Rover 2 está ahí, prueba otro movimiento");
  }
}