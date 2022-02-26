dark_key = document.querySelector('button[darkbtn]');
elements = document.querySelectorAll("body *");

dark_key.addEventListener('click', function () {
    for (let i = 0; i < elements.length; i++) {
        elements[i].toggleAttribute('dark');
    }
});