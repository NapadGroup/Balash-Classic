dark_key = document.querySelector('button[darkbtn]');
elements = document.querySelectorAll("body *");
root = document.querySelector(':root');

function Chengemode() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].toggleAttribute('dark');
        if (elements[i].hasAttribute('dark')) {
            root.style.cssText += '--bg-primary-color: var(--bg-dark-primary-color);\n--bg-secondary-color: var(--bg-dark-secondary-color);';
        } else {
            root.style.cssText += '--bg-primary-color: var(--bg-light-primary-color);\n--bg-secondary-color: var(--bg-light-secondary-color);';
        }
    }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    Chengemode();
}

dark_key.addEventListener('click', Chengemode);