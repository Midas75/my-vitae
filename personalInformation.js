import { findValueByKey, findTitle } from "./baseMatcher.js";
import { newBaseModel } from "./baseModel.js";
import { config } from "./conf.js";
export function generate(data) {
    let obj = newBaseModel(data.name);
    
    for(let key in config.personalInformation){
        if(!key.startsWith("_")&&data[key]!=null){
            let div=document.createElement('div');
            div.style=config.personalInformation._tagStyle;
            
            let textLayer=document.createElement('div');
            textLayer.style=config.personalInformation._textLayerStyle;
            textLayer.innerHTML=config.personalInformation[key].format(data[key]);

            div.appendChild(textLayer);

            obj.content.appendChild(div);
        }
    }    
    return obj.container;
}
export function parse(str) {
    let data = {};
    str.replace(/\n+\n/g, "\n");

    data.name = findTitle(str);
    data.gender = findValueByKey(str, "性别");
    data.age = findValueByKey(str, "年龄");
    data.work = findValueByKey(str, "经验");
    data.phone = findValueByKey(str, "号码");
    data.email = findValueByKey(str, "邮箱");
    return data;
}