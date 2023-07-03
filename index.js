const nextEl= document.querySelector(".next")
const imgEl = document.querySelector(".image")
const img = document.querySelectorAll("img")
const prevEl = document.querySelector(".prev")

let curentImg = 1;

nextEl.addEventListener("click",()=>{
    curentImg++;
    clearTimeout(timeout)
    updateImg();
})

prevEl.addEventListener("click",()=>{
    curentImg--;
    clearTimeout(timeout)
    updateImg();
})
updateImg()
function updateImg(){
    if (curentImg>img.length) {
        curentImg = 1;
    }else if(curentImg<1){
        curentImg = img.length
    }
    imgEl.style.transform = `translateX(-${(curentImg -1) * 1600}px)`

    timeout=setTimeout(()=>{
        curentImg++
        updateImg()
    },3000)
}