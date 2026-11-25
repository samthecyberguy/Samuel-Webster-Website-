// Pricing links carry the visitor's choice into the inquiry without submitting it.
const serviceSelect = document.querySelector("#support-service");
document.querySelectorAll("[data-support-service]").forEach((link) => {
  link.addEventListener("click", () => {
    serviceSelect.value = link.dataset.supportService;
  });
});
