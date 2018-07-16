
var road = document.getElementById('road');
var y = 0;
var speed = 5;
var light = 0;

function createCar(){
    var car = document.createElement('div');
        car.id = 'car';
        road.appendChild( car );  

}

function move(){
    y+=speed;
    road.style.backgroundPosition='0px ' + y + 'px';
}

function action(){
    
    if(event.keyCode == 38){
        speed++;
        
    }
    if(event.keyCode == 40){
        speed--;
    }
    if(event.keyCode == 76 ){
        
        light++;
        if(light <= 2){
            var far1 = document.createElement('div');
            far1.id = 'far1';
            car.appendChild( far1 );
            var far2 = document.createElement('div');
            far2.id = 'far2'; 
            car.appendChild( far2 );
         }
    }
}

createCar();
setInterval( move, 20 );
