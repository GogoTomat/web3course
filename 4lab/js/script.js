(function() {
    const card = document.querySelector('.js-card');
    const cells = document.querySelectorAll('.js-cell');

    const dragStart = function () { //скрывает карту
        setTimeout(() => {
            this.classList.add('hide');
        }, 0);
    };

    const dragEnd = function () {
        this.classList.remove('hide');//показывает карту обратно
    };

    const dragOver = function (evt) {
        evt.preventDefault();
    };

    const dragEnter = function (evt) {
        evt.preventDefault();
        this.classList.add('hovered');
    };

    const dragLeave = function () {
        this.classList.remove('hovered');
    };

    const dragDrop = function () {
        this.append(card);
        this.classList.remove('hovered');
    };

    for (let i = 0; i <= 3; i++){
        if (i != 2){
            cells[i].addEventListener('dragover', dragOver);
            cells[i].addEventListener('dragenter', dragEnter);
            cells[i].addEventListener('dragleave', dragLeave);
            cells[i].addEventListener('drop', dragDrop);
        }


    }



    // cells.forEach(cell => {
    //     cell.addEventListener('dragover', dragOver);
    //     cell.addEventListener('dragenter', dragEnter);
    //     cell.addEventListener('dragleave', dragLeave);
    //     cell.addEventListener('drop', dragDrop);
    // });


    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
} ())