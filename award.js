import { findTitle, findValueByKeys, splitIntoListItems, splitSub } from "./baseMatcher.js";
import { config } from "./conf.js";
import { formatIfExists } from "./utils.js";
import { newBaseModel } from "./baseModel.js";
let award = {
    render: function (data) {
        let obj = newBaseModel("获奖经历", data.contents.length);
        obj.container.dataset.position=data.position;
        obj.container.dataset.size=data.size;
        for (let i = 0; i < data.contents.length; i++) {
            console.log(data.contents)
            let container = document.createElement('div');
            container.style = config.award._containerStyle;

            if (data.contents[i]["time"] != null && data.contents[i]["name"] != null) {
                let timeLayer = document.createElement('div');
                timeLayer.style = config.award._timeLayerStyle;
                timeLayer.innerHTML = formatIfExists(config.award.time.format, data.contents[i]["time"].value);
                timeLayer.dataset.position=data.contents[i]["time"].position;
                timeLayer.dataset.size=data.contents[i]["time"].size;
                container.appendChild(timeLayer);

                let awardLayer = document.createElement('div');
                awardLayer.style = config.award._titleLayerStyle;
                awardLayer.innerHTML = data.contents[i]["name"].value;
                awardLayer.dataset.position=data.contents[i]["name"].position;
                awardLayer.dataset.size=data.contents[i]["name"].size;
                container.appendChild(awardLayer);
            }

            obj.contents[i].appendChild(container);
        }
        return obj.container;
    },
    parse: function (tokens) {
        let data = {
            position: tokens[0].position,
            size: tokens[0].raw.length,
            contents: []
        };

        let subs = splitSub(tokens)

        for (let sub of subs) {
            let obj = {
                name: {
                    value: sub[0].text,
                    position: sub[0].position,
                    size: sub[0].raw.length
                }
            }
            let listItems = splitIntoListItems(sub)
            for (let key in config.award) {
                if (!key.startsWith("_")) {
                    obj[key] = findValueByKeys(listItems, config.award[key].key)
                }
            }
            data.contents.push(obj)
        }
        return data
    }
}
export { award }