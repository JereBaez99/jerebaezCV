const box_left_1 = document.getElementById("box-left-1");
const box_left_2 = document.getElementById("box-left-2");
const box_right_1 = document.getElementById("box-right-1");
const box_right_2 = document.getElementById("box-right-2");

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
    }
  });
};

const observador = new IntersectionObserver(cargarBox, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.5,
});

observador.observe(box_left_1);
observador.observe(box_left_2);
observador.observe(box_right_1);
observador.observe(box_right_2);
