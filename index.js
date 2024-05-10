





const allDes = document.querySelectorAll(".des-box");
const monitorDes = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            entry.target.classList.add("des-show");
        }
    })
} , {threshold: .5})

allDes.forEach(element =>{
    monitorDes.observe(element);
})



const allabImages = document.querySelectorAll(".ab-image img");
const monitorabImages= new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            entry.target.classList.add("ab-imageshow");
        }
    })
} , {threshold: .5})

allabImages.forEach(element =>{
    monitorabImages.observe(element);
})





const allabTexts = document.querySelectorAll(".ab-text ul li");
const monitorabTexts= new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            entry.target.classList.add("ab-textshow");
        }
    })
} , {threshold: .5})

allabTexts.forEach(element =>{
    monitorabTexts.observe(element);
})


const allpacs = document.querySelectorAll(".pac-card img");
const monitorpacs= new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            entry.target.classList.add("pac-show");
        }
    })
} , {threshold: .5})

allpacs.forEach(element =>{
    monitorpacs.observe(element);
})












const allTexts = document.querySelectorAll(".spot-text");
const monitorTexts = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            entry.target.classList.add("show-text");
        }
    })
} , {threshold: .5})

allTexts.forEach(element =>{
    monitorTexts.observe(element);
})
const allFacis = document.querySelectorAll(".face-box");
const monitorFacis = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            entry.target.classList.add("show-face");
        }
    })
} , {threshold: .5})

allFacis.forEach(element =>{
monitorFacis.observe(element);
})



const allSlidersBox = document.querySelectorAll(".opi-box");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");



allSlidersBox.forEach((box , index) => {
box.style.left = `${index * 100}%`;
})

let activeSlider = 0
function moveSlider(){
    if(activeSlider > allSlidersBox.length -1){
        activeSlider = 0
    }
    if(activeSlider < 0){
        activeSlider = allSlidersBox.length -1
    }
    allSlidersBox.forEach((box) => {
        box.style.transform = `translateX(-${activeSlider * 100}%)`;
        })
}

prevBtn.addEventListener("click" , () =>{
    activeSlider--
    moveSlider()

})
nextBtn.addEventListener("click" , () =>{
    activeSlider++
    moveSlider()
})

setInterval(() => {
    activeSlider++
    moveSlider()
}, 5000)












