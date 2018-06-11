let heart = document.querySelector("#heart");
let heart2 = document.querySelector("#heart2");

heart.addEventListener("click", hide);

function hide() {
    document.getElementById("heart").style.visibility = "hidden";
}

heart2.addEventListener("click", shakeheart);

function shakeheart() {
    heart2.classList.toggle("shake");
}
