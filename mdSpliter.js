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