let tabsArr = [
  {
    id: 1,
    buttonTitle: "Tab 1",
    content: "This is the tab 1",
  },
  {
    id: 2,
    buttonTitle: "Tab 2",
    content: "This is the tab 2",
  },
  {
    id: 3,
    buttonTitle: "Tab 3",
    content: "This is the tab 3",
  },
  {
    id: 4,
    buttonTitle: "Tab 4",
    content: "This is the tab 4",
  },
  {
    id: 5,
    buttonTitle: "Tab 5",
    content: "This is the tab 5",
  },
  {
    id: 6,
    buttonTitle: "Tab 6",
    content: "This is the tab 6",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let activetab = tabsArr[0].id;
  function renderTabs() {
    const tabContainer = document.querySelector("#tabContainer");
    const contentContainer = document.querySelector("#tabContentContainer");
    tabsArr.map((tab) => {
      const tabButton = document.createElement("button");
      tabButton.className = "tabLinks";
      tabButton.textContent = tab.buttonTitle;
      tabButton.setAttribute("data-tab", tab.id);
      tabContainer.appendChild(tabButton);

      const tabContent = document.createElement("div");
      tabContent.id = tab.id;
      tabContent.className = "tabContent";
      tabContent.innerHTML = `<h3>${tab.buttonTitle}</h3><p>${tab.content}</p>`;
      contentContainer.appendChild(tabContent);
    });
  }
  tabContainer.addEventListener("click", (event) => {
    if (event.target.matches(".tabLinks")) {
      const tabId = event.target.getAttribute("data-tab");
      if (tabId !== activetab) {
        openTab(tabId);
        activetab = tabId;
      }
    }
  });
  const openTab = (tabId) => {
    const tabContents = document.querySelectorAll(".tabContent");
    const tabLinks = document.querySelectorAll(".tabLinks");
    tabContents.forEach((tab) => tab.classList.remove("active"));
    tabLinks.forEach((tab) => tab.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    document
      .querySelector(`button[data-tab="${tabId}"]`)
      .classList.add("active");
  };
  renderTabs();
});
