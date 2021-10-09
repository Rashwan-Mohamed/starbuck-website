const menu = document.querySelector(".mmenu");

const real = document.querySelector(".menu");

const chev = document.querySelectorAll(".chev");

const ceroli = document.querySelectorAll(".business");

const togl = document.querySelector(".toggle");

const sec = document.querySelector(".togll");

const hedo = document.querySelector(".hedo");

const nody=document.querySelector('body');

real.addEventListener("click", () => {
  sec.classList.toggle("disable");
  flow();
});

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  togl.classList.toggle("disable");

  if (sec.classList.contains("disable") == false) {
    sec.classList.add("disable");
  }
flow();
});


hedo.addEventListener('click',()=>{
sec.classList.add("disable");
flow();
})



function flow(){

if(!sec.classList.contains("disable")||!togl.classList.contains("disable")){

nody.classList.add("iver");

} 

else{

    nody.classList.remove("iver");
}

}


ceroli.forEach((item) => {
  item.addEventListener("click", (e) => {
if(screen.width<768){

    e.currentTarget.querySelector(".chev").classList.toggle("rot");
    e.currentTarget.nextElementSibling.classList.toggle("nohight");
}

  });
});

window.addEventListener('load',()=>{

if(screen.width>767){

ceroli.forEach((e)=>{


    e.nextElementSibling.classList.remove("nohight");

})

}

else{
    e.nextElementSibling.classList.add("nohight");
}

})

window.addEventListener('resize',()=>{

if(screen.width>767){

ceroli.forEach((e)=>{


    e.nextElementSibling.classList.remove("nohight");

})

}

else{

    ceroli.forEach((e)=>{


     e.nextElementSibling.classList.add("nohight");

})
   


}


    
})




// .addEventListener('click',()=>{

// chev.classList.toggle("rot");

// })
