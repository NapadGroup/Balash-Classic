
Elements = [
    "alert",
    "dropdown",
    "line",
    "tooltip",
    "blockquote",
    "breadcrumb",
    "button",
    "navbar",
    "pagi",
    "pg-bar",
    "table",
    "tabs"
]

Elements_Used = []

Elements.forEach(function(element){
    element_use = document.querySelector(element)
    if (typeof(element) != null && typeof(element) != undefined) {
        Elements_Used.push(element)
    }
})

function download(filename, text) {
  element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

Elements_Used_text = `"${Elements_Used[0]}"`

Elements_Used.splice(0, 1)

Elements_Used.forEach(function(element){
    return Elements_Used_text += `, "${element}"`
})

config = document.querySelector("config");

jsonexport = `
{
  "Used": [
      ${Elements_Used_text}
  ],
  "Utilities": [
      ${config.getAttribute("Utilities")}
  ],
  "Systems": {
      ${config.getAttribute("Systems")}
  },
  "FormUse": ${config.getAttribute("FormUse")},
  "dist": "${config.getAttribute("dist")}"
}
`

if (config.getAttribute("download") == "true") {
    download("godui.json", jsonexport)
}