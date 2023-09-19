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
function loadLinkTo(doc, linkPath) {
    let link = doc.createElement('link')
    link.href = linkPath
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('type', 'text/css')
    doc.head.appendChild(link)
}
export function loadLinksTo(doc, linkPath) {
    if (linkPath instanceof Array) {
        for (let item of linkPath) {
            loadLinkTo(doc, item)
        }
    }
    else if (typeof linkPath==="string") {
        loadLinkTo(doc, linkPath)
    }
}
