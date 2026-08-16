const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const desktopQuery = window.matchMedia("(min-width: 1024px)");
const form = document.querySelector(".contacts__form");
const box = document.querySelector(".contacts__box");

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
        if (event.key === "Escape" && header.classList.contains("is-open")) {
            setOpen(false);
            burger.focus();
        }
    });

    desktopQuery.addEventListener("change", (event) => {
        if (event.matches) {
            setOpen(false);
        }
    });
}

if (form && box) {
    const success = box.querySelector(".contacts__success");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        box.classList.add("is-sent");
        form.inert = true;

        if (success) {
            success.focus();
        }
    });
}
