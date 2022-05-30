const boxes = document.querySelectorAll(".box")

window.addEventListener('scroll',scrollAnimation );

scrollAnimation();

function scrollAnimation(){
    const triggerPoint = (window.innerHeight/6 * 3);

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerPoint) {
            box.classList.add("show")
        }else {
            box.classList.remove("show")
        }
    })
}