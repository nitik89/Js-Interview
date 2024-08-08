document.addEventListener("DOMContentLoaded", function () {
  const arr = [
    { width: "33.3333%", color: "blue" },
    { width: "33.3333%", color: "green" },
    { width: "33.3333%", color: "purple" },
    { width: "50%", color: "yellow" },
    { width: "50%", color: "red" },
    { width: "75%", color: "teal" },
    { width: "25%", color: "violet" },
  ];
  const container = document.querySelector(".container");
  //   console.log();
  arr.map((box) => {
    const div = document.createElement("div");
    div.style.width = box.width;
    div.classList.add("box");
    // div.innerHTML = "Hello";
    div.style.backgroundColor = box.color;
    container.appendChild(div);
  });
  container.addEventListener("click", (event) => {
    // const targetElement = event.target;
    // if (targetElement.classList.contains("box")) {
    //   const backgroundColor = targetElement.style.backgroundColor;
    //   alert(`The background Color is ${backgroundColor}`);
    // }
    //other way
    const clickedElement = event.target;
    const index = Array.from(container.children).indexOf(clickedElement);
    const config = arr[index];
    alert(`${config.color}`);
  });
});
