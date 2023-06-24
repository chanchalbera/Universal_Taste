

document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.querySelector(".sidebar");
  const sidebarToggler = document.querySelector(".sidebar-toggler");

  sidebarToggler.addEventListener("click", function() {
    sidebar.classList.toggle("active");
  });
});
