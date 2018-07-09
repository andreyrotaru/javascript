//LEGEND
// 0 -land
// 1 -corn
// 2 -potato
// 3 -tomato  
var farm_map = [0,0,0,0,0,0,0,0,0,0];
var farm_div = document.getElementById("farm");
var farm_price = document.getElementById("price");
var total = 0;

var prices = [ 15, 10, 5 ];
   

function showBill(){
    //farm_price.innerHTML = '';
    for(var i = 0; i<=farm_map.length ;i++){
        if (farm_map[i] == 1) {
            total += prices[0];
            farm_price.innerHTML = `<h2>  ${total } Lei </h2>`; 
        break;
        } 
        if (farm_map[i] == 2) {
            total += prices[1];
             farm_price.innerHTML = `<h2>  ${total } Lei </h2>`;
        break;
        } 
        if (farm_map[i] == 3) {
            total += prices[2];
            farm_price.innerHTML = `<h2>  ${total} Lei </h2>`;
        break;
        }
    }
}


function plantCorn(){
    var col = prompt("Alege care sector doresti!");
    if(farm_map[col] == 0){
        farm_map[col] = 1;
        showBill();
    }
    showMap();
   }

function plantTomato(){
    var col_1 = prompt("Alege care sector doresti!");
    if(farm_map[col_1] == 0){
        farm_map[col_1] = 2;
        showBill();
    }
    showMap();
}

function plantPotato(){
    var col_2 = prompt("Alege care sector doresti!");
    if(farm_map[col_2] == 0){
        farm_map[col_2] = 3;
        showBill();
    }
    showMap();
}

function showMap(){
    
    farm_div.innerHTML = '';
    for(var i = 0; i<farm_map.length;i++){
     if( farm_map[i] == 1 ){
        farm_div.innerHTML += ` <div class="box corn"></div> `; 
    } else if(farm_map[i] == 2){
        farm_div.innerHTML += ` <div class="box tomato"></div> `;
    } else if( farm_map[i] == 3 ){
        farm_div.innerHTML += ` <div class="box potato"></div> `;
    }  else{
        farm_div.innerHTML += ` <div class="box"></div> `;
}
}
}
showMap();

