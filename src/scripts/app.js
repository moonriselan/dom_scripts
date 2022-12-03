const btnRef = document.querySelector( '#showCode');
const codeRef = document.querySelector( ".show-code__code");

function toggleText(){
    if (btnRef.innerText === "POKAZ KOD") {
        btnRef.innerText = "Schowaj kod";
    }else {
        btnRef.innerText = "Pokaz kod";
    }
}
btnRef.addEventListener("click", function () {
    toggleText();
    codeRef.classList.toggle("show-code__code--hidden");
});