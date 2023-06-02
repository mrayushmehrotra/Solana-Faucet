const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e)=>{
    
    cursor.style.top = `${e.pageY - 80}px`;
    cursor.style.left = `${e.pageX - 5}px`;
})
