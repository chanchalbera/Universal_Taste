document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const sidebarToggler = document.querySelector(".sidebar-toggler");

  sidebarToggler.addEventListener("click", function () {
    console.log("hi")
    sidebar.classList.toggle("active");
  });
});
