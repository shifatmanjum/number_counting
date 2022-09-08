let count = 0;
const PlusBtn = document.getElementById("plus-btn");
PlusBtn.addEventListener("click", function () {
    count++;
    document.getElementById("count").innerText = count;
});

const minusbtn = document.getElementById("minus-btn");
minusbtn.addEventListener("click", function () {
    count--;
    document.getElementById("count").innerText = count;
});