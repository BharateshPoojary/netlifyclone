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
let fourthlines = document.querySelectorAll('.fourthline');
fourthlines.forEach(fourthline => {
    fourthline.addEventListener('mouseenter', () => {
        let greenarrow = fourthline.nextElementSibling;
        greenarrow.style.marginLeft = "18px";
        greenarrow.style.transition = "all 0.3s";
    });

    fourthline.addEventListener('mouseleave', () => {
        let greenarrow = fourthline.nextElementSibling;
        greenarrow.style.marginLeft = "10px";
        greenarrow.style.transition = "all 0.3s";
    });
});
