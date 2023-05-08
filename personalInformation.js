import { findValueByKeys, findTitle } from "./baseMatcher.js";
import { newBaseModel } from "./baseModel.js";
import { config } from "./conf.js";
import { formatIfExists } from "./utils.js";

let personalInformation = {
    render: function (data) {
        let obj = newBaseModel(data.name);

        for (let key in config.personalInformation) {
            if (!key.startsWith("_") && data[key] != null) {
                let div = document.createElement('div');
                div.style = config.personalInformation._tagStyle;

                let textLayer = document.createElement('div');
                textLayer.style = config.personalInformation._textLayerStyle;
                textLayer.innerHTML = formatIfExists(
                    config.personalInformation[key].format,
                    data[key]
                )

                div.appendChild(textLayer);

                obj.contents[0].appendChild(div);
            }
        }
        return obj.container;
    },
    parse: function (str) {
        let data = {};
        str.replace(/\n+\n/g, "\n");

        data.name = findTitle(str);

        for (let key in config.personalInformation) {
            if (!key.startsWith("_")) {
                data[key] = findValueByKeys(str, config.personalInformation[key].key);
            }
        }
        return data;
    }
}
export {
    personalInformation
}