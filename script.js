document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector("header .fa-bars");
    const sidebar = document.querySelector(".sidebar");
    menuIcon.addEventListener("click", () => {
        sidebar.classList.toggle("d-none");
    });
});
