const ul = document.getElementById("profile_animation");

function frames() {
  const animation = ul.animate(
    [{ transform: "TransLateY(0px)" }, { transform: "TransLateY(-60px)" }],
    // keframes
    {
      iterations: 1,
      duration: 500,
      // options
    }
  );
  return animation.finished;
}

function repeat() {
  frames().then((res)=>{
    console.log(res);
    var container = document.querySelector("#profile_animation")
    ul.appendChild(container.querySelectorAll("li")[0]); 
  });
}

setInterval(() => {
  repeat();
}, 2000);


