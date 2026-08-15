const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const desktopQuery = window.matchMedia("(min-width: 1024px)");

if (header && burger && menu) {
    const setOpen = (open) => {
        header.classList.toggle("is-open", open);
        document.body.classList.toggle("is-menu-open", open);
        burger.setAttribute("aria-expanded", String(open));
        burger.setAttribute(
            "aria-label",
            open ? "Закрыть меню" : "Открыть меню",
        );
    };

    burger.addEventListener("click", () => {
        setOpen(!header.classList.contains("is-open"));
    });

    header.addEventListener("click", (event) => {
        if (event.target.closest("[data-menu-close]")) {
            setOpen(false);
        }
    });

    menu.addEventListener("click", (event) => {
        if (event.target.closest("a, .header__button")) {
            setOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setOpen(false);
        }
    });

    desktopQuery.addEventListener("change", (event) => {
        if (event.matches) {
            setOpen(false);
        }
    });
}
