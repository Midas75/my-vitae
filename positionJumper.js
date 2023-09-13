function getTextNodesIn(node) {
    let textNodes = [];
    if (node.nodeType == 3) {
        textNodes.push(node);
    } else {
        let children = node.childNodes;
        for (let i = 0, len = children.length; i < len; ++i) {
            textNodes.push.apply(textNodes, getTextNodesIn(children[i]));
        }
    }
    return textNodes;
}
export function bindJumperByPosition(editorArea, previewDoc) {
    const tags = previewDoc.getElementsByTagName('*');
    const totalLength = editorArea.innerText.length;
    for (let tag of tags) {
        if (tag.attributes && tag.dataset.position) {
            tag.addEventListener('click', function (e) {
                e.stopPropagation();
                editorArea.scroll({
                    top: editorArea.scrollHeight * 100 / totalLength - editorArea.clientHeight / 2,
                    behavior: 'smooth'
                });
                let position = parseInt(tag.dataset.position);
                // editorArea.focus();
                let range = document.createRange();
                range.selectNodeContents(editorArea);
                let textNodes = getTextNodesIn(editorArea);
                let lCharCount = 0,rCharCount=0;
                range.setStart(editorArea.firstChild,position);
                range.setEnd(editorArea.firstChild,position+1);
                // for (let textNode of textNodes) {
                //     rCharCount=lCharCount+textNode.length;
                //     if (lCharCount<position&&position <= rCharCount) {
                //         range.setStart(textNode, position-lCharCount);
                //         range.setEnd(textNode, position+1-lCharCount);
                //         console.log(range)
                //         let selection=window.getSelection();
                //         selection.removeAllRanges();
                //         selection.addRange(range);
                //         break;
                //     }
                //     lCharCount=rCharCount;
                // }
                
            })
        }
    }
}