document.querySelectorAll("button").forEach(button => {

button.addEventListener("click", () => {

button.style.transform = "scale(0.95)";

setTimeout(() => {
button.style.transform = "scale(1)";
}, 150);

});

});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

sections.forEach(section=>{

const position = section.getBoundingClientRect().top;

if(position < window.innerHeight - 100){

section.style.opacity = "1";
section.style.transform = "translateY(0)";

}

});

});
const orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener("click",()=>{

alert("Thank you for choosing Moon Restaurant!");

});