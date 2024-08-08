let accordion = [
  {
    id: 1,
    title: "This is the first accordion",
    subsection: [
      {
        id: 1,
        title: "This is the 1.1",
      },
      {
        id: 2,
        title: "This is the 1.2",
      },
    ],
  },
  {
    id: 2,
    title: "This is the second accordion",
    subsection: [
      {
        id: 1,
        title: "This is the 2.1",
      },
      {
        id: 2,
        title: "This is the 2.2",
      },
    ],
  },
  {
    id: 3,
    title: "This is the third accordion",
    subsection: [
      {
        id: 1,
        title: "This is the 3.1",
      },
      {
        id: 2,
        title: "This is the 3.2",
      },
    ],
  },
];
document.addEventListener("DOMContentLoaded", function () {
  const accordionSection = document.querySelector("#accordionSection");
  console.log(accordionSection);
  function createAccordion() {
    accordion.map((acc) => {
      const currentAccordion = document.createElement("div");
      currentAccordion.innerHTML = `<p>${acc.title}</p>`;
      currentAccordion.classList.add("accordion");
      currentAccordion.setAttribute("acc-id", acc.id);
      accordionSection.appendChild(currentAccordion);
      acc.subsection.map((sub) => {
        const subAccordion = document.createElement("div");
        subAccordion.innerHTML = `<p>${sub.title}</p>`;
        subAccordion.classList.add("subAccordion");
        subAccordion.setAttribute("sub-id", acc.id);
        accordionSection.appendChild(subAccordion);
      });
    });
    accordionSection.addEventListener("click", (event) => {
      if (event.target.matches(".accordion")) {
        const accId = event.target.getAttribute("acc-id");
        const subId = document.querySelectorAll(`div[sub-id="${accId}"]`);
        console.log(subId);
        subId.forEach((sub) => {
          if (sub.classList.contains("active")) {
            sub.classList.remove("active");
          } else {
            sub.classList.add("active");
          }
        });
      }
    });
  }
  createAccordion();
});
