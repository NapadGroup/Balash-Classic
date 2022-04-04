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

function Chengemodebtn() {
    Chengemode();
    if (localStorage.getItem('theme') == 'dark') {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme','dark');
    }
}

if (localStorage.getItem('theme') == 'dark') {
    Chengemode();
} else if (localStorage.getItem('theme') == 'light') {} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    Chengemodebtn();
}

dark_key.addEventListener('click', Chengemodebtn);