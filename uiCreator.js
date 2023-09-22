import { readAsStringAsync } from './fileReader.js'
async function loadContentTo(div, svgPath) {
    // let html = await readAsStringAsync('./baseIcon.html', { cache: 'default' });
    let content = document.createElement('div')
    content.className = "icon"
    content.innerHTML = await readAsStringAsync(svgPath)
    content = content.outerHTML
    if (div != null) {
        div.innerHTML = content
    }
    return content
}
export async function createLinkIcon(div) {
    return await loadContentTo(div, 'svg/main/showLink.svg')
}
export async function createHideLinkIcon(div) {
    return await loadContentTo(div, 'svg/main/hideLink.svg')
}
export async function createDetailLinkIcon(div) {
    return await loadContentTo(div, 'svg/main/detailLink.svg')
}
export async function createScrollLockIcon(div) {
    return await loadContentTo(div, 'svg/main/scrollLock.svg')
}
export async function createScrollUnlockIcon(div) {
    return await loadContentTo(div, 'svg/main/scrollUnlock.svg')
}
export async function createPrintIcon(div) {
    return await loadContentTo(div, 'svg/main/print.svg')
}
export async function createSaveIcon(div) {
    return await loadContentTo(div, 'svg/main/save.svg')
}
export async function createClearIcon(div) {
    return await loadContentTo(div, 'svg/main/clear.svg')
}
export async function createStyleIcon(div) {
    return await loadContentTo(div, 'svg/main/style.svg')
}
export async function createFullColorIcon(div) {
    return await loadContentTo(div, 'svg/main/fullColor.svg')
}
export async function createGrayColorIcon(div) {
    return await loadContentTo(div, 'svg/main/grayColor.svg')
}
function loadLinkTo(doc, linkPath) {
    let lastIndex = linkPath.lastIndexOf('/');
    let linkId = linkPath.substring(lastIndex + 1);
    let existingLink = doc.getElementById(linkId);
    if (existingLink) {
        existingLink.href = linkPath
    } else {
        let link = doc.createElement('link')
        link.href = linkPath
        link.id = linkId
        link.setAttribute('rel', 'stylesheet')
        link.setAttribute('type', 'text/css')
        doc.head.appendChild(link)
    }
}
function removeLinkFrom(doc, linkPath) {
    let lastIndex = linkPath.lastIndexOf('/');
    let linkId = linkPath.substring(lastIndex + 1);
    let existingLink = doc.getElementById(linkId);
    if (existingLink) {
        doc.head.removeChild(existingLink);
    } else {
    }
}
export function loadLinksTo(doc, linkPaths, clear) {
    if (clear) {
        let links = doc.head.getElementsByTagName('link');
        while (links.length > 0) {
            doc.head.removeChild(links[links.length - 1])
        }
    }
    if (linkPaths instanceof Array) {
        for (let item of linkPaths) {
            loadLinkTo(doc, item)
        }
    }
    else if (typeof linkPaths === "string") {
        loadLinkTo(doc, linkPaths)
    }
}
export function removeLinksFrom(doc, linkPaths) {
    if (linkPaths instanceof Array) {
        for (let item of linkPaths) {
            removeLinkFrom(doc, item)
        }
    } else if (typeof linkPaths === "string") {
        removeLinkFrom(doc, linkPaths)
    }
}
export function initMessageList(container) {
    let list = document.createElement('div');
    list.classList.add("message-list");
    list.dataset.z = 5000;
    list.dataset.bottom = 0;
    container.appendChild(list);
    return list;
}
function addToList(messageList, message) {
    let last = messageList.lastElementChild;
    let zIndex = last ? parseInt(last.style.zIndex) : 5000;
    let top = last ? parseInt(last.style.top) + last.offsetHeight : 0;
    message.classList.add("message");
    message.classList.add("fade");
    let offset = messageList.offsetHeight;
    message.style.top = top + offset + "px";
    messageList.appendChild(message);
    message.style.zIndex = (zIndex - 1) + "";
    setTimeout(() => {
        message.classList.remove("fade");
    }, 10)
}
function removeFromList(messageList, message) {
    if (!messageList.contains(message)) return;
    let top = parseInt(message.style.top);
    let offset = message.offsetHeight;
    offset += messageList.offsetHeight;
    message.classList.add("fade");
    for (let i = 0; i < messageList.children.length; i++) {
        let item = messageList.children[i];
        let itemTop = parseInt(item.style.top)
        if (itemTop >= top) {
            item.style.top = itemTop - offset + "px";
        }
    }
    message.addEventListener('transitionend', () => {
        if (messageList.contains(message)) {
            messageList.removeChild(message);
        }
    })
}
export function showMessage(messageList, messageHTML, delay) {
    let message = document.createElement('div');
    message.innerHTML = messageHTML;
    addToList(messageList, message);
    setTimeout(() => {
        removeFromList(messageList, message)
    }, delay ? delay : 5000)
    return message;
}