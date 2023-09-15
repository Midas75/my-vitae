import { Lexer } from "./marked.esm.min.js"

export function _findValueByKey(str, key) {
    let matchResult = str.match(new RegExp("(?<=- (" + key + ")：).+"));
    if (matchResult != null) return matchResult[0];
    else return null;
}
export function _findValueByKeys(str, keys) {
    let queryKeys = "";
    for (let i = 0; i < keys.length; i++) {
        queryKeys += keys[i];
        if (i != keys.length - 1)
            queryKeys += "\|";
    }
    return _findValueByKey(str, queryKeys);
}
export function findValueByKeys(listItems, keys) {
    for (let key of keys) {
        if (listItems[key] != null) {
            return listItems[key];
        }
    }
    return null;
}
export function _splitIntoListItems(str) {
    let tokens = Lexer.lex(str);
    let res = {

    }
    for (let item of tokens) {
        if (item.type == "list") {
            for (let listItem of item.items) {
                let spiltArray = listItem.text.split(/：|:/)
                if (spiltArray.length == 1) {
                    res[spiltArray[0]] = spiltArray[0];
                }
                else {
                    res[spiltArray[0]] = listItem.text.substr(spiltArray[0].length + 1);
                }
            }
        }
    }
    return res
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
export function _split(str) {
    return str.match(/(## )[\s\S]*?(?=(\n## )|$)/g)
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

export function _splitSub(str) {
    return str.match(/(### )[\s\S]*?(?=(\n#+?# )|$)/g)
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
