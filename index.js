const menu = document.querySelector(".mmenu");

const real = document.querySelector(".menu");

const chev = document.querySelectorAll(".chev");

const ceroli = document.querySelectorAll(".cero li");

const togl = document.querySelector(".toggle");

const sec = document.querySelector(".togll");

const hedo = document.querySelector(".hedo");

const nody=document.querySelector('body');

real.addEventListener("click", () => {
  console.log("ok");
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
  console.log("okkkk");
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
    e.currentTarget.querySelector(".chev").classList.toggle("rot");
    e.currentTarget.nextElementSibling.classList.toggle("nohight");
  });
});







// .addEventListener('click',()=>{

// chev.classList.toggle("rot");

// })
