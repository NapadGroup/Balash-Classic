#! /usr/bin/env node

fs = require('fs');
http = require('http');

BaseURL = 'https://unpkg.com/godratmand-ui@latest/build';

jsonfile = fs.readFileSync('godui.json');
json = JSON.parse(jsonfile);

Used = json.Used;
Utilities = json.Utilities;
Systems = json.Systems;
FormUse = json.FormUse;
dist = json.dist;

cssImport = ""
jsImport = ""

Used.forEach(function(item) {
    cssImport += `<link rel="stylesheet" href="${BaseURL}/elements/${item}.min.css">\n`
});

if (Utilities) {
    cssImport += `<link rel="stylesheet" href="${BaseURL}/utilities/utilities.min.css">\n`
}

if (Systems.Flex) {
    cssImport += `<link rel="stylesheet" href="${BaseURL}/layout/flex.min.css">\n`
}

if (Systems.Shaft) {
    cssImport += `<link rel="stylesheet" href="${BaseURL}/layout/shaft.min.css">\n`
}

if (Systems.Grid) {
    cssImport += `<link rel="stylesheet" href="${BaseURL}/layout/grid.min.css">\n`
    jsImport += `<script src="${BaseURL}/js/Grid-system.min.js"></script>\n`
}

if (Systems.Switch) {
    cssImport += `<link rel="stylesheet" href="${BaseURL}/layout/contents.min.css">\n`
    jsImport += `<script src="${BaseURL}/js/Switch.min.js"></script>\n`
}

if (Systems.SmartDark) {
    jsImport += `<script src="${BaseURL}/js/Smart-Dark.min.js"></script>\n`
}

if (Systems.ReadMD) {
    jsImport += `<script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/2.0.0/showdown.min.js"></script>\n`
    jsImport += `<script src="${BaseURL}/js/ReadMD.min.js"></script>\n`
}

fs.writeFile('import.html', `${cssImport}\n${jsImport}`, err => {if (err) {console.error(err);return}})

console.log('import.html created successfully.');