const container=document.querySelector(".container")
const input=document.querySelector("#inputField")
const btn=document.querySelector("#submit")
const paragraph=document.querySelector("p")

btn.addEventListener("click",function(){
    var para=document.createElement("li")
    para.innerText=input.value;
    container.appendChild(para);
    input.value=""
    para.addEventListener("click",function(){
        para.classList.toggle("afterClick")
       
    })
})
