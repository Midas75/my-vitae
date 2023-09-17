import {readAsStringAsync} from './fileReader.js'
export function createLinkIcon(div){
    let html=readAsStringAsync('./baseIcon.html');
    div.innerHTML=html.replace(/{{path_to_svg}}/g,'"svg/main/hideLink.svg"');
    return div;
}