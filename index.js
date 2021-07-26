function Phones (brand, model, price, color, inStock) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.color = color;
  this.inStock = inStock;
  this.coments = [];
}



// function Coments (){
//   for(let i=0; i < Math.floor(Math.random()*101); i++){
//     this.lenght = i;
//   }
// }

function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min))+min;
}

function getRandomColor(){
  if (Math.random() < 0.3){
    return 'White'} else {
      return 'Black'};
}

const array = [];
for(let i = 0; i<50; i++){
  array.push(new Phones('google', `pixel ${getRandomInt(2, 6)}`, getRandomInt(5000, 50000), getRandomColor(), Math.random()>0.5));
}

console.table(array)