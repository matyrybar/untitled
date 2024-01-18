window.onload = function() {
    let button = document.getElementById("buttonallert");
    let customAlert = document.getElementById("customAlert");

    button.addEventListener("click", function() {
        customAlert.style.display = "block";

        setTimeout(function() {
            customAlert.style.display = "none";
        }, 3000);
    });

    let carky = new Array(12).fill(0);
    let picker = document.getElementById("cary");
    let sum = 0;

    carky.forEach((koment, index) => {
        let number = Math.floor(Math.random() * 3);
        let text = document.createElement("_");
        text.textContent = "_";

        switch (number + 1) {
            case 1:
                text.style.color = "red";
                break;
            case 2:
                text.style.color = "yellow";
                break;
            case 3:
                text.style.color = "green";
                break;
        }
        picker.appendChild(text);
    });}




