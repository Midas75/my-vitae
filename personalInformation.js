import { findValueByKeys, splitIntoListItems, findTitle } from "./baseMatcher.js";
import { newBaseModel } from "./baseModel.js";
import { config } from "./conf.js";
import { formatIfExists } from "./utils.js";
import { Lexer } from "./marked.esm.min.js";

let personalInformation = {
    render: function (data) {
        let obj = newBaseModel(data.name);
        obj.container.dataset.position=data.position;
        obj.container.dataset.size=data.size;
        let tagLayer = document.createElement('div');
        obj.contents[0].style += ";" + config.personalInformation._contentContainerAdditionStyle;
        tagLayer.style = config.personalInformation._tagLayerStyle;

        for (let key in config.personalInformation) {
            if (!key.startsWith("_") && data[key] != null) {
                if (key == "avatar") {
                    continue;
                }
                let div = document.createElement('div');
                div.dataset.position=data[key].position;
                div.dataset.size=data[key].size;
                div.style = config.personalInformation._tagStyle;
                div.innerHTML = formatIfExists(
                    config.personalInformation[key].format,
                    data[key].value
                )
                tagLayer.appendChild(div);
            }
        }
        obj.contents[0].appendChild(tagLayer);
        if (config.personalInformation["avatar"] && data["avatar"] != null) {
            obj.container.style.marginBottom = "0vw";
            let div = document.createElement('div');
            div.dataset.position=data["avatar"].position;
            div.dataset.size=data["avatar"].size;
            div.style = config.personalInformation._avatarStyle;
            div.innerHTML = formatIfExists(
                config.personalInformation["avatar"].format,
                data["avatar"].value
            )
            obj.contents[0].appendChild(div);
        }
        return obj.container;
    },
    parse: function (tokens) {
        let data = {};
        for (let token of tokens) {
            if (token.type === 'heading' && token.depth === 1) {
                data.name = token.text
                data.position = token.position
                data.size = token.raw.length
                break;
            }
        }
        let listItems = splitIntoListItems(tokens)
        // for (let token of tokens) {

        //     if (token.type === 'list') {
        //         let tokenPosition = token.position
        //         for (let item of token.items) {
        //             let spiltArray = item.text.split(/：|:/)
        //             listItems[spiltArray[0]] = {
        //                 position: tokenPosition,
        //                 size : item.raw.length
        //             }
        //             if (spiltArray.length == 1) {
        //                 listItems[spiltArray[0]].value = spiltArray[0];
        //             }
        //             else {
        //                 listItems[spiltArray[0]].value = item.text.substr(spiltArray[0].length + 1);
        //             }
        //             tokenPosition += item.raw.length
        //         }
        //     }
        // }
        for (let key in config.personalInformation) {
            if (!key.startsWith("_")) {
                data[key] = findValueByKeys(listItems,config.personalInformation[key].key)
            }
        }
        return data;
    }
}
export {
    personalInformation
}