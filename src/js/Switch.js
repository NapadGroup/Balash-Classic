const Switchs = document.querySelectorAll('*[switch]');
const ContentS = document.querySelectorAll('contents'); 

if (Switchs.length > 0 && ContentS.length == Switchs.length) {
    for (var i = 0; i < Switchs.length; i++) {
        const Switch = Switchs[i];
        const ContentName = Switch.getAttribute('switch');
        const Content = document.querySelector(`contents[name="${ContentName}"]`);
        const Switch_keys = Switch.children;
        const Default_key = Switch.getAttribute('default') - 1;
        const Contents = Content.children;
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
        }
        Switch_keys[Default_key].setAttribute('active', true);
        Contents[Default_key].setAttribute('active', true);
    }
} else {
    console.error('Switchs and Contents are not equal');
}