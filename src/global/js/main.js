const forderungenButton = document.getElementById("forderungen-dropdown-button");
const forderungenDropdown = document.getElementById("forderungen-dropdown");

const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuOpen = document.getElementById("mobile-menu-open");
const mobileMenuClose = document.getElementById("mobile-menu-close");

forderungenButton.addEventListener("click", () => {
    if (forderungenButton.classList.contains("inactive") && forderungenDropdown.classList.contains("invisible")) {
        forderungenDropdown.classList.remove("invisible");
        forderungenDropdown.classList.add("visible");
        forderungenButton.classList.add("active");
        forderungenButton.classList.remove("inactive");
    } else {
        if (forderungenButton.classList.contains("active") && forderungenDropdown.classList.contains("visible")) {
            forderungenDropdown.classList.remove("visible");
            forderungenDropdown.classList.add("invisible");
            forderungenButton.classList.add("inactive");
            forderungenButton.classList.remove("active");
        }
    }
});

mobileMenuOpen.addEventListener("click", () => {
    if (mobileMenu.classList.contains("invisible")) {
        mobileMenu.classList.remove("invisible");
    }
});

mobileMenuClose.addEventListener("click", () => {
    if (mobileMenu.classList.contains("invisible") == false) {
        mobileMenu.classList.add("invisible");
    }
});