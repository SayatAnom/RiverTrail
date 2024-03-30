
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
    perPage:5,
  
    breakpoints:{
      992:{
        perPage:4,
      },
      768:{
        perPage:3,
      },
      425:{
        perPage:2,
      },

    },
    rewind:true,
    pagination:false,
    
    } );
    splide.mount();
  } );

const cartbtn = document.getElementById('add-cart');

function cartfunction(){
  cartbtn.innerHTML = "Add to cart";
}
const btncart = document.getElementById('btn-cart');
function addfunction(){
  btncart.innerHTML = "Add to shop";
}


