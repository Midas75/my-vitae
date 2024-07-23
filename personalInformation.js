import { findValueByKeys, splitIntoListItems } from "./baseMatcher.js";
import { newBaseModel } from "./baseModel.js";
import { config } from "./conf.js";
import { formatIfExists } from "./utils.js";

let personalInformation = {
    render: function (data) {
        let obj = newBaseModel(data.name);
        obj.container.dataset.position = data.position;
        obj.container.dataset.size = data.size;
        let tagLayer = document.createElement('div');
        obj.contents[0].classList.add("pi-content-container-addition");
        tagLayer.classList.add("pi-tag-layer");

        for (let key in config.personalInformation) {
            if (!key.startsWith("_") && data[key] != null) {
                if (key == "avatar") {
                    continue;
                }
                if (key == "birthday" && data["age"] != null) {
                    continue;
                }
                let div = document.createElement('div');
                div.dataset.position = data[key].position;
                div.dataset.size = data[key].size;
                div.classList.add("pi-tag");
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
            div.dataset.position = data["avatar"].position;
            div.dataset.size = data["avatar"].size;
            div.classList.add("pi-avatar");
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
            if (token.type === 'heading') {
                data.name = token.tokens[0].text
                data.position = token.position
                data.size = token.raw.length
                break;
            }
        }
        let listItems = splitIntoListItems(tokens)
        for (let key in config.personalInformation) {
            if (!key.startsWith("_")) {
                data[key] = findValueByKeys(listItems, config.personalInformation[key].key)
            }
        }
        return data;
    }
}
export {
    personalInformation
}