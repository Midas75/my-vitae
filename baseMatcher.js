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
export function findValueByKeys(listItems,keys){
    for(let key of keys){
        if(listItems[key]!=null){
            return listItems[key];
        }
    }
    return null;
}
export function splitIntoListItems(str) {
    let tokens = Lexer.lex(str);
    let res = {

    }
    for (let item of tokens) {
        if(item.type=="list"){
            for(let listItem of item.items){
                let spiltArray=listItem.text.split(/：|:/)
                if(spiltArray.length==1){
                    res[spiltArray[0]]=spiltArray[0];    
                }
                else{
                    res[spiltArray[0]]=listItem.text.substr(spiltArray[0].length+1);
                }
            }
        }
    }
    return res
}
export function findTitle(str) {
    return str.match(/(?<=#?# ).+/)[0];
}
export function findContent(str) {
    let tokens=Lexer.lex(str)
    let res="";
    for(let i=1;i<tokens.length;i++){
        res+=tokens[i].raw;
    }
    return res;
}
export function findAttribute(attribute) {
    return str.find(attribute)
}
export function split(str) {
    return str.match(/(## )[\s\S]*?(?=(\n## )|$)/g)
}
export function removeAnnotation(str) {
    return str.replace(/<!--[\s\S]*?-->/g, "")
}
export function findPersonalInformation(str) {
    return str.match(/(?<=(\n|^))(# )[\s\S]*?(?=(\n## )|$)/g)
}
export function splitSub(str) {
    return str.match(/(### )[\s\S]*?(?=(\n#+?# )|$)/g)
}