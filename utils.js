
export function formatIfExists(format,value){
    return format==null?value:format(value)
}