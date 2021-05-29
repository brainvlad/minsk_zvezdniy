// сайт управляется с помощью JQuery
// большая часть синтаксиса и функций относиться к этой библиотеке
// подбробнее: https://jquery.com/

$(document).ready(function($) {                     // отслеживание событий веб-документа
    $('.popup-open_1').click(function() {           // событие клика по элементу с классом
        $('.main').css('filter', 'blur(8px)')       // добавление стиля для элемента с классом
        $('.popup-fade_1').fadeIn(300);             // анимация появления элемента popup-окна
        return false;
    });


    $('.popup-close').click(function() {            // событие клика по элементу с классом
        $('.main').css('filter', 'blur(0px)')       // изменение стиля
        $(this).parents('.popup-fade_1').fadeOut(); // поиск элемента среди родителей и анимация сокрытия
        $(this).parents('.popup-fade_2').fadeOut(); // без параметров 300 мс
        return false;
    });

    $(document).keydown(function(e) {               // событие нажатия клавиш
        if (e.keyCode === 27) {                     // 27 - код клавиши esc
            $('.main').css('filter', 'blur(0px)')   // изменение стиля
            e.stopPropagation();                    // прерывает выполнение команды клавиши
            $('.popup-fade_1').fadeOut();           // анимация сокрытия элемента с классом
            $('.popup-fade_2').fadeOut();           // анимация сокрытия элемента с классом
        }
    });

    $('.popup-fade_1').click(function(e) {          // событие клика по элементу с классом и передача элемента
        if ($(e.target).closest('.popup').length == 0) {    // возвразаем ближайший родительский элемент
            $('.main').css('filter', 'blur(0px)')   // изменение стиля
            $(this).fadeOut();                      // анимация скрытия
        }
    });

    $('.popup-open_2').click(function() {           // событие клика по элементу с классом
        $('.main').css('filter', 'blur(8px)')       // изменение стиля
        $('.popup-fade_2').fadeIn(300);             // анимация сокрытия элемента
        return false;                               // завершеени функции
    });


    $('.chek').click(function() {                   // событие клика по элементу с классом
        $('.popup-fade_2 .popup-content').fadeOut(0);   //сокрытие элементов контента внутри класса
        $('.popup-chek').fadeIn();                  // анимация появления
        $('.popup-chek .popup-content').fadeIn();   // анимация появления элементов контента внутри класса
        return false;
    });

    $('.chek-close').click(function() {             // событие клика по элементу с классом
        $('.main').css('filter', 'blur(0px)')       // изменение стиля
        $(this).parents('.popup-fade_2').fadeOut(); // анимация скорытия родительского элемента с классом
        $('.popup-chek').fadeOut();                 // анимация сокрытия элемента
        $('.popup-chek .popup-content').fadeOut();  // анимация сокрытия элемента внутри элемента с классом
        $('.popup-fade_2 .popup-content').fadeIn(500);  // анимация появления элемента внутри элемента с классом
        return false;                               // конец функции
    });


});
