function execCmd(command, value = null) {
    document.execCommand(command, false, value);
}

function toggleCodeView() {
    const editor = document.getElementById('editor');
    const codeView = document.getElementById('code-view');

    if (codeView.style.display === 'none') {
        codeView.value = formatHTML(editor.innerHTML);
        codeView.style.display = 'block';
        editor.style.display = 'none';
    } else {
        editor.innerHTML = codeView.value;
        codeView.style.display = 'none';
        editor.style.display = 'block';
    }
}

function formatHTML(html) {
    // Ensure all standalone tags are self-closed
    html = html.replace(/<br>/g, '<br/>')
               .replace(/<hr>/g, '<hr/>')
               .replace(/<img(.*?)>/g, '<img$1/>')
               .replace(/<input(.*?)>/g, '<input$1/>')
               .replace(/<meta(.*?)>/g, '<meta$1/>')
               .replace(/<link(.*?)>/g, '<link$1/>');
    
    return html;
}

function prepareContentForSave() {
    const editor = document.getElementById('editor');
    const hiddenContent = document.getElementById('hidden-content');
    const displayContent = document.getElementById('display-content');
    hiddenContent.value = formatHTML(editor.innerHTML);
    displayContent.innerHTML = hiddenContent.value;
}
