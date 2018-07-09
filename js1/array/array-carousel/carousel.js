var slides = [
    {
        title: "My first slide",
        url: "http://www.elementsofstyleblog.com/wp-content/uploads/2010/02/600x400-princeville-sunset.jpg"
    },
    {
        title: "The seeecond one",
        url: "https://orig00.deviantart.net/de33/f/2014/061/7/a/img_3600__600x400__by_rlnorvell-d78prrx.jpg"   
    },
    {
        title: "Ze last",
        url: "http://www.parketart.ru/wp-content/uploads/2017/03/88-600x400.jpg"
    }
];

function showSlide( index ){
   
   var div = document.body.children[0];
   div.innerHTML +=`
   <div>
        <h2>${slides[index].title}</h2>
        <img src="${slides[index].url}">
   </div>
   `;
}

function showCarousel(){
    // clear
    var div = document.body.children[0];
    div.innerHTML = '';
    for (var i = 0; i < 3; i++){
    showSlide(i);
    }
}
function prev(){
    // push,pop,unshift,shift
    slides.push( slides.shift() );
    showCarousel();
}
function next(){
    slides.unshift( slides.pop() );
    showCarousel();
}
///////////////////////////////////////////////////
showCarousel();

setInterval( next, 1000 );

////////////////////////////////////



// setTimeout(f,interval)
// setInterval(f,interval)
// clearTimeout(id)
// clearInterval(id)