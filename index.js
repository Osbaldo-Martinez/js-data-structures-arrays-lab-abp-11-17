// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(x){
  drivers.push(x);
}
function destructivelyPrependDriver(x){
  drivers.unshift(x);
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(x){
  const newArray = [...drivers, x]
  return newArray;
}
