window.addEventListener("load", () => {
  const beats = document.querySelectorAll(".beat");
  const blocks = document.querySelectorAll(".blocks div");
  const content = document.querySelector(".content");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  blocks.forEach((block, index) => {
    block.addEventListener("click", function() {
      beats[index].currentTime = 0;
      beats[index].play();
      createDots(index);
    });
  });

  const createDots = index => {
    const dot = document.createElement("div");
    content.appendChild(dot);
    dot.style.backgroundColor = colors[index];
    dot.style.animation = `jump 1s ease`;
    dot.addEventListener("animationend", function() {
      content.removeChild(this);
    });
  };
});
