const changeThemeBTN = document.querySelector(".changeThemeBTN");

const body = document.querySelector("body")

const imageChangeThemeBTN = document.querySelector(".sun")

changeThemeBTN.addEventListener("click", () => {

    body.classList.toggle("darkMode")

    const darkModeIsOn = body.classList.contains("darkMode")

    if (darkModeIsOn) {
        imageChangeThemeBTN.setAttribute("src", "./src/imagens/moon.png")
    } else {
        imageChangeThemeBTN.setAttribute("src", "./src/imagens/sun.png")
    }
});

