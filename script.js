let videocontainer = document.querySelector(".videocontainer");
videocontainer.addEventListener('mouseenter', () => {
    let videocircle = document.querySelector(".videocircle");
    videocircle.style.width = "105px";
    videocircle.style.height = "105px";
    videocircle.style.transition = "all 0.3s";

})
videocontainer.addEventListener('mouseleave', () => {
    let videocircle = document.querySelector(".videocircle");
    videocircle.style.width = "100px";
    videocircle.style.height = "100px";
    videocircle.style.transition = "all 0.3s";

})