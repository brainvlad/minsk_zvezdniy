const burgerButton = document.getElementById("burger-button");
    // присваивание постоянной переменной элемента с идентификатором
burgerButton.addEventListener("click", () => {          // регистрируем обработчик события click
    const burgerMenu = document.getElementById("burger-menu");
    // призваивание постоянной перменной элемента с идентификатором, находящийся на веб-странице
    if (burgerMenu.getAttribute("class").indexOf("burger-menu_active") !== -1){
    // если у меню есть класс
    // добавляем необходимые классы
        burgerMenu.setAttribute("class", "burger-menu");
    }else{
    // иначе добавляем еще один класс
        burgerMenu.setAttribute("class", "burger-menu burger-menu_active");

    }
});