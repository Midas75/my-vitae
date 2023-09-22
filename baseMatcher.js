import { Lexer } from "./marked.esm.min.js"
export function removeATag(element){
    let elements = element.getElementsByTagName('a')
    for(let e of elements){
        e.removeAttribute('href')
    }
}
export function expandATag(element){
    let elements=element.getElementsByTagName('a')
    for(let e of elements){
        if(e.innerHTML!=e.href)
        e.innerHTML+=`(${e.href})`
    }
}
export function findValueByKeys(listItems, keys) {
    for (let key of keys) {
        if (listItems[key] != null) {
            return listItems[key];
        }
    }
    return null;
}
export function splitIntoListItems(tokens) {
    let listItems = {}
    for (let token of tokens) {
        if (token.type === 'list') {
            let tokenPosition = token.position
            for (let item of token.items) {
                let spiltArray = item.text.split(/：|:/)
                listItems[spiltArray[0]] = {
                    position: tokenPosition,
                    size: item.raw.length
                }
                if (spiltArray.length == 1) {
                    listItems[spiltArray[0]].value = spiltArray[0];
                }
                else {
                    listItems[spiltArray[0]].value = item.text.substr(spiltArray[0].length + 1);
                }
                tokenPosition += item.raw.length
            }
        }
    }
    return listItems
}
export function findTitle(str) {
    return str.match(/(?<=#?# ).+/)[0];
}
export function findContent(str) {
    let tokens = Lexer.lex(str)
    let res = "";
    for (let i = 1; i < tokens.length; i++) {
        res += tokens[i].raw;
    }
    return res;
}
export function findAttribute(attribute) {
    return str.find(attribute)
}
export function split(str) {
    let tokens = Lexer.lex(str)
    let length = 0
    let tokenLength = []
    let result = {}
    for (let token of tokens) {
        token.position = length;
        tokenLength.push(length);
        length += token.raw.length;
    }
    let l = 0;
    while (true) {
        if (l >= tokens.length) {
            break;
        }
        if (tokens[l].type === 'heading' && tokens[l].depth <= 2) {
            let r = l + 1;
            while (true) {
                if (r >= tokens.length) {
                    break;
                }
                else if (tokens[r].type === 'heading' && tokens[r].depth <= 2) {
                    break;
                }
                r += 1;
            }
            let subTokens = tokens.slice(l, r)
            if (subTokens[0].depth == 1) {
                result["个人信息"] = subTokens;
            }
            else {
                result[subTokens[0].text] = subTokens
            }
            l = r;
        }
        else {
            l += 1;
        }
    }
    return result
}
export function removeAnnotation(str) {
    return str.replace(/<!--[\s\S]*?-->/g, "")
}
export function findPersonalInformation(str) {
    let tokens = Lexer.lex(str)
    let length = 0
    let tokenLength = []
    for (let token of tokens) {
        tokenLength.push(length)
        length += token.raw.length
    }
    let firstHeadingIndex = -1
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].type === 'heading' && tokens[i].depth == 1) {
            firstHeadingIndex = i;
            break;
        }
    }
    let lastHeadingIndex = firstHeadingIndex
    for (let i = firstHeadingIndex + 1; i < tokens.length && tokens[i].type != 'heading'; i++) {
        lastHeadingIndex = i;
    }
    let resultTokens = [];
    for (let i = firstHeadingIndex; i <= lastHeadingIndex; i++) {
        resultTokens.push(tokens[i])
        tokens[i].position = tokenLength[i];
    }
    return resultTokens;
}
export function splitSub(tokens) {
    let result = []
    let l = 0
    while (true) {
        if (l >= tokens.length) {
            break;
        }
        if (tokens[l].type === 'heading' && tokens[l].depth == 3) {
            let r = l + 1;
            while (true) {
                if (r >= tokens.length) {
                    break;
                }
                else if (tokens[r].type === 'heading' && tokens[r].depth == 3) {
                    break;
                }
                r += 1;
            }
            let subTokens = tokens.slice(l, r)
            result.push(subTokens)
            l = r;
        } else {
            l += 1;
        }
    }
    return result
}
