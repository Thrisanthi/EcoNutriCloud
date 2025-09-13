const form = document.getElementById("contactForm");
  const popup = document.getElementById("popup");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    popup.style.display = "flex"; 
    form.reset(); 
  });

//   function closePopup(){
//     popup.style.display = "none";
  function closePopup(){
    window.location.href = "{% url 'home' %}";
  }