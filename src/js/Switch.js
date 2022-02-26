Switch = document.querySelector('*[switch]');
Content = document.querySelector('contents');

Switch_keys = Switch.children;
Default_key = Switch.getAttribute('default') - 1;
Contents = Content.children;

for (let i = 0; i < Switch_keys.length; i++) {
    Switch_keys[i].addEventListener('click', function () {
        for (let j = 0; j < Switch_keys.length; j++) {
            Switch_keys[j].removeAttribute('active');
        }
        this.setAttribute('active', true);
        for (let k = 0; k < Contents.length; k++) {
            Contents[k].removeAttribute('active');
        }
        Contents[i].setAttribute('active', true);
    });
    Switch_keys[Default_key].setAttribute('active', true);
    Contents[Default_key].setAttribute('active', true);
}