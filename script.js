const year = document.querySelector("#year");
const tabButtons = document.querySelectorAll(".tab-button");
const tabLinks = document.querySelectorAll("[data-tab-link]");
const tabPanels = document.querySelectorAll(".tab-panel");

year.textContent = new Date().getFullYear();

function showTab(selectedTab) {
  tabButtons.forEach((tabButton) => {
    tabButton.classList.toggle("active", tabButton.dataset.tab === selectedTab);
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === selectedTab);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showTab(button.dataset.tab);
  });
});

tabLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showTab(link.dataset.tabLink);
    window.history.replaceState(null, "", link.getAttribute("href"));
  });
});
