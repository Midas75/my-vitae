export function bindJumperByPosition(editorArea, previewDoc) {
    const tags = previewDoc.getElementsByTagName('*');
    for (let tag of tags) {
        if (tag.attributes && tag.dataset.position && tag.dataset.size) {
            tag.style.userSelect='none'; // 避免在双击时触发默认的选择事件
            tag.addEventListener('dblclick', function (e) {
                e.stopPropagation();
                let position = parseInt(tag.dataset.position);
                let size = parseInt(tag.dataset.size);
                setSelectionRange(editorArea,position,position+size)
                editorArea.focus();
            })
        }
    }
}
function setSelectionRange(textarea, selectionStart, selectionEnd) {
    // First scroll selection region to view
    const fullText = textarea.value;
    textarea.value = fullText.substring(0, selectionEnd);
    // For some unknown reason, you must store the scollHeight to a variable
    // before setting the textarea value. Otherwise it won't work for long strings
    const scrollHeight = textarea.scrollHeight
    textarea.value = fullText;
    let scrollTop = scrollHeight;
    const textareaHeight = textarea.clientHeight;
    if (scrollTop > textareaHeight){
        // scroll selection to center of textarea
        scrollTop -= textareaHeight / 2;
    } else{
        scrollTop = 0;
    }
    textarea.scrollTop = scrollTop;

    // Continue to set selection range
    textarea.setSelectionRange(selectionStart, selectionEnd);
}