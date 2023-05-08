export function split(str){
    return str.match(new RegExp("(## )[\\s\\S]*?(?=(\\n## )|$)"))
}