const modal = document.getElementById("infoModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const closeBtn = document.getElementById("closeModal");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      modalImg.src = card.getAttribute("data-img");
      modalTitle.textContent = card.getAttribute("data-title");

      const textLines = card.getAttribute("data-text").split("\n");
      modalText.innerHTML = textLines.map(line => `<p>${line}</p>`).join("");

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });