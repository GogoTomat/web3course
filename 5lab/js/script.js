ball.onmousedown = function(event) { // отследить нажатие

    // подготовить к перемещению:
    // разместить поверх остального содержимого и в абсолютных координатах
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    // переместим в body, чтобы мяч был точно не внутри position:relative
    document.body.append(ball);
    // и установим абсолютно спозиционированный мяч под курсор

    moveAt(event.pageX, event.pageY);

    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
    function moveAt(pageX, pageY) {
                ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
                ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
    }

    function onMouseMove(event) {

            moveAt(event.pageX, event.pageY);

    }

    // (перемещать по экрану
    if (ball.position.top > 0) {
        document.addEventListener('mousemove', onMouseMove);
    }

    // положить мяч, удалить более ненужные обработчики событий
    ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
    };

    ball.ondragstart = function() {
        return false;
    };

};