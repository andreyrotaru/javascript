
// Legend
// 0 - empty
// 1 - corn
// 2 - potato
// 3 - tomato
var farm_map = [0,0,0,0,0,0,0,0,0,0];
var farm_div = document.getElementById('farm');
var prices = {corn: 15,potato: 5,tomato:10};
var kit = 0;

function black(){
for(var i = 0;i < farm_map.length;i++){
if(farm_map[i] == 1){
kit += prices.corn;
alert(kit);
break;
}
if(farm_map[i] == 2){
kit += prices.potato;
alert(kit);
break;
}
if(farm_map[i] == 3){
kit += prices.tomato;
alert(kit);
break;
}
}
}
black()

function plantCorn(){
var corn = +prompt("plant a Corn");
if(corn < farm_map.length){
if(farm_map[corn]==0){
farm_map[corn] = 1;
black();
}else{

}

showMap();

}
}

function plantPotato(){
var potato = +prompt("plant potato");
if(potato < farm_map.length){
if(farm_map[potato] == 0){
farm_map[potato] = 2;
black();
}
showMap();
}
}
function plantTomato(){
var tomato = +prompt("plant a tomato");
if(tomato < farm_map.length){
if(farm_map[tomato] == 0){
farm_map[tomato] = 3;
black();
}
showMap();
}
}

function showMap(){
farm_div.innerHTML = "";
for(var i = 0;i<farm_map.length;i++){
//farm_div.innerHTML += '<div class="box"></div>'
if(farm_map[i] == 1){
farm_div.innerHTML += '<div class="box corn"></div>'
}
else if(farm_map[i] == 2){
farm_div.innerHTML += '<div class="box potato"></div>'
}
else if(farm_map[i] == 3){
farm_div.innerHTML += '<div class="box tomato"></div>'
}
else{
farm_div.innerHTML += '<div class="box"></div>'
}
}

}
showMap();
// при нажатии появляется prompt() который спрашивает на каком участке посадить если занят то выдать предупреждение
// также проверить чтобы попытки доабавить продукты не выходили за рамки
// var prices = {corn : 15,potato: 5, tomato: 10};и записать прибыль
