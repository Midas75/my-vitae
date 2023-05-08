export function findValueByKey(str, key) {
    let matchResult = str.match(new RegExp("(?<=- (" + key + ")：).+"));
    if (matchResult != null) return matchResult[0];
    else return null;
}
export function findValueByKeys(str, keys) {
    let queryKeys = "";
    for (let i = 0; i < keys.length; i++) {
        queryKeys += keys[i];
        if (i != keys.length - 1)
            queryKeys += "\|";
    }
    return findValueByKey(str,queryKeys);
}
export function findTitle(str) {
    return str.match(/(?<=#?# ).+/)[0];
}
export function findContent(str){
    return str.replace(/#+.*/g,"")
}
export function findAttribute(attribute){
    return str.find(attribute)
}
export function split(str){
    return str.match(/(## )[\s\S]*?(?=(\n## )|$)/g)
}
export function removeAnnotation(str){
    return str.replace(/<!--[\s\S]*?-->/g,"")
}
export function findPersonalInformation(str){
    return str.match(/(?<=(\n|^))(# )[\s\S]*?(?=(\n## )|$)/g)
}
export function splitSub(str){
    return str.match(/(### )[\s\S]*?(?=(\n#+?# )|$)/g)
}