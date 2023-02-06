const box_left_1 = document.getElementById("box-left-1");
const box_left_2 = document.getElementById("box-left-2");
const box_right_1 = document.getElementById("box-right-1");
const box_right_2 = document.getElementById("box-right-2");
const card_img_1 = document.getElementById("card-img-1");
const card_img_2 = document.getElementById("card-img-2");
const card_img_3 = document.getElementById("card-img-3");

const cargarBox = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      console.log(entrada.target);
      if (
        entrada.target.id == "box-left-1" ||
        entrada.target.id == "box-left-2"
      ) {
        entrada.target.classList.add("box-left-visible");
        // console.log("box-left");
      }
      if (
        entrada.target.id == "box-right-1" ||
        entrada.target.id == "box-right-2"
      ) {
        entrada.target.classList.add("box-right-visible");
        // console.log("box-right");
      }
      if (
        entrada.target.id == "card-img-1" ||
        entrada.target.id == "card-img-2" ||
        entrada.target.id == "card-img-3"
      ) {
        entrada.target.classList.add("card-img-visible");
      }
    }
  });
};

const observador = new IntersectionObserver(cargarBox, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.5,
});

const observador_img = new IntersectionObserver(cargarBox, {
root:null,
rootMargin: "0px 0px 0px 0px",
threshold: 1,
});

observador.observe(box_left_1);
observador.observe(box_left_2);
observador.observe(box_right_1);
observador.observe(box_right_2);
observador.observe(card_img_1);
observador.observe(card_img_2);
observador.observe(card_img_3);

