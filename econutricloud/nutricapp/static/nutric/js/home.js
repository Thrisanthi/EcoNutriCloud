// Hamburger menu toggle
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

// Modal Elements
let modal = document.getElementById('product-modal');
let modalTitle = document.getElementById('modal-title');
let modalImg = document.getElementById('modal-img');
let modalDesc = document.getElementById('modal-desc'); 

// Open Product Modal
function openModal(title, img, desc) {
  modal.style.display = 'flex';
  modalTitle.textContent = title;
  modalImg.src = img;
  modalDesc.textContent = desc;
}

// Close Modal
function closeModal() {
  modal.style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function (e) {
  if (e.target === modal) closeModal();
};
