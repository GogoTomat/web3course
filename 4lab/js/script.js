document.addEventListener('click', function(event) {
    if (event.target.dataset.counter !== undefined) { // если есть атрибут
        event.target.value++;
    }
});

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
});
