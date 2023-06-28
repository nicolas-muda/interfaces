let inputCodigo = document.getElementById("inputCodigo");
let inputNombre = document.getElementById("inputNombre");
let inputMes = document.getElementById("inputMes");
let inputAno = document.getElementById("inputAno");
let inputCvv = document.getElementById("inputCvv");

inputCodigo.addEventListener("input", (e) => {
    document.querySelector('.divCodigo').innerText = document.getElementById('inputCodigo').value;
});

inputNombre.addEventListener("input", (e) => {
    document.querySelector('.divNombre').innerText = document.getElementById('inputNombre').value;
});

inputMes.addEventListener("change", (e) => {
    document.querySelector('.divMes').innerText = document.querySelector('.month-input').value;
});

inputAno.addEventListener("change", (e) => {
    document.querySelector('.divAño').innerText = document.querySelector('.year-input').value;
});

inputCvv.addEventListener("mouseenter", (e) => {
    document.querySelector('.frente').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.atras').style.transform = 'perspective(1000px) rotateY(0deg)';
});

inputCvv.addEventListener("mouseout", (e) => {
    document.querySelector('.frente').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.atras').style.transform = 'perspective(1000px) rotateY(180deg)';
});

inputCvv.addEventListener("input", (e) => {
    document.querySelector('.barraBlanca').innerText = document.querySelector('.cvv-input').value;
});

