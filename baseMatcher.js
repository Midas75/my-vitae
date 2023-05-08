export function findValueByKey(str,key){
    return str.match(new RegExp("(?<=- "+key+"：).+"))[0];
}
export function findTitle(str){
    return str.match(/(?<=##?# ).+/)[0];
}