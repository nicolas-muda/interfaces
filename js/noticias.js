let noticia1 = document.getElementById("cronograma del quirofano movil");
let noticia2 = document.getElementById("veterinarios recomiendan no humanizar a sus mascotas");
let noticia3 = document.getElementById("Esterilizaciones gratuitas");
let noticia4 = document.getElementById("continua la reubicacion de los animales rescatados");
let noticia5 = document.getElementById("Se realizo un rescate en tres arroyos");
let noticia6 = document.getElementById("campaña crowfunding");

let input = document.getElementById("buscador");

let noticias = [noticia1, noticia2, noticia3, noticia4, noticia5, noticia6];

input.addEventListener("input", (e) => {
    noticias.forEach(noticia => {
        if (noticia.id.includes(input.value)) {
            noticia.style.display = 'block';
        }
        else {
            noticia.style.display = 'none';
        }
    });
});