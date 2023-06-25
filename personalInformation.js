import { findValueByKeys,splitIntoListItems, findTitle } from "./baseMatcher.js";
import { newBaseModel } from "./baseModel.js";
import { config } from "./conf.js";
import { formatIfExists } from "./utils.js";
import { Lexer } from "./marked.esm.min.js";

let personalInformation = {
    render: function (data) {
        let obj = newBaseModel(data.name);

        let tagLayer=document.createElement('div');
        obj.contents[0].style+=";"+config.personalInformation._contentContainerAdditionStyle;
        tagLayer.style=config.personalInformation._tagLayerStyle;

        for (let key in config.personalInformation) {
            if (!key.startsWith("_") && data[key] != null) {
                if(key=="avatar"){
                    continue;
                }
                let div = document.createElement('div');
                div.style = config.personalInformation._tagStyle;
                div.innerHTML = formatIfExists(
                    config.personalInformation[key].format,
                    data[key]
                )
                tagLayer.appendChild(div);
            }
        }
        obj.contents[0].appendChild(tagLayer);
        if(config.personalInformation["avatar"]&&data["avatar"]!=null){
            obj.container.style.marginBottom="0vw";
            let div=document.createElement('div');
            div.style=config.personalInformation._avatarStyle;
            div.innerHTML=formatIfExists(
                config.personalInformation["avatar"].format,
                data["avatar"]
            )
            obj.contents[0].appendChild(div);
        }
        return obj.container;
    },
    parse: function (str) {
        let data = {};
        str.replace(/\n+\n/g, "\n");

        data.name = findTitle(str);
        
        let listItems=splitIntoListItems(str);

        for (let key in config.personalInformation) {
            if (!key.startsWith("_")) {
                data[key] = findValueByKeys(listItems, config.personalInformation[key].key);
            }
        }
        return data;
    }
}
export {
    personalInformation
}