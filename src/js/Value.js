ValueElements = document.querySelectorAll('*[values]');

ValueOptions = {
    "h": "height",
    "min-h": "min-height",
    "max-h": "max-height",
    "w": "width",
    "min-w": "min-width",
    "max-w": "max-width",
    "clr": "color",
    "bg": "background",
    "pad": "padding",
    "pad-t": "padding-top",
    "pad-b": "padding-bottom",
    "pad-l": "padding-left",
    "pad-r": "padding-right",
    "mar": "margin",
    "mar-t": "margin-top",
    "mar-b": "margin-bottom",
    "mar-l": "margin-left",
    "mar-r": "margin-right",
    "all": ["h", "min-h", "max-h", "w", "min-w", "max-w", "clr", "bg", "pad", "mar", "mar-t", "mar-b", "mar-l", "mar-r"],
};

ValueElements.forEach(function(element) {
    values = element.getAttribute('values').split(' ');
    values.forEach(function(value) {
        ValueOptions.all.forEach(function(valueoption) {
            if (value.search(valueoption) != -1) {
                value = value.replace(valueoption, ValueOptions[valueoption]);
                element.style.cssText += `${value.replace(":", ": ")};\n`;
            }
        })
    })
});