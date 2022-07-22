const Switchs = document.querySelectorAll('*[switch]');
const ContentS = document.querySelectorAll('contents'); 

if (Switchs.length > 0 && ContentS.length == Switchs.length) {
    for (var i = 0; i < Switchs.length; i++) {
        const Switch = Switchs[i];
        const ContentName = Switch.getAttribute('switch');
        const Content = document.querySelector(`contents[name="${ContentName}"]`);
        const Switch_keys = Switch.children;
        const Default_key = Switch.getAttribute('default') - 1;
        if (sessionStorage.getItem(`ActiveKey${i}`) == null) {
            sessionStorage.setItem(`ActiveKey${i}`, Default_key)
        }
        const ak = i;
        const Contents = Content.children;
        for (let z = 0; z < Switch_keys.length; z++) {
            Switch_keys[z].addEventListener('click', function () {
                sessionStorage.setItem(`ActiveKey${ak}`, z)
                for (let j = 0; j < Switch_keys.length; j++) {
                    Switch_keys[j].removeAttribute('active');
                }
                this.setAttribute('active', true);
                for (let k = 0; k < Contents.length; k++) {
                    Contents[k].removeAttribute('active');
                }
                Contents[z].setAttribute('active', true);
            });
        }
        const ActiveKey = sessionStorage.getItem(`ActiveKey${i}`);
        Switch_keys[ActiveKey].setAttribute('active', true);
        Contents[ActiveKey].setAttribute('active', true);
    }
} else {
    console.error('Switchs and Contents are not equal');
}