content = document.querySelector('content[markdown]');
content_deta = content.innerHTML;

converter = new showdown.Converter();
options = ['parseImgDimensions', 'simplifiedAutoLink', 'tables', 'tasklists', 'simpleLineBreaks', 'emoji'];
options.forEach(function (option) {
    converter.setOption(option, true);
});
converter.setFlavor('github');

content_html = converter.makeHtml(content_deta);
content.innerHTML = content_html;