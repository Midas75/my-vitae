import { findTitle, findValueByKeys, split, splitIntoListItems, splitSub } from "./baseMatcher.js";
import { config } from "./conf.js";
import { formatIfExists } from "./utils.js";
import { newBaseModel } from "./baseModel.js";
let educationExperience = {
    render: function (data) {
        let obj = newBaseModel("教育经历", data.contents.length)
        obj.container.dataset.position = data.position;
        obj.container.dataset.size = data.size;
        let index = 0;
        for (let item of data.contents) {
            let mainContainer = document.createElement('div')
            mainContainer.classList.add("main-container");
            mainContainer.dataset.position = item.position
            mainContainer.dataset.size = item.size
            if (item["school"] != null) {
                let schoolLayer = document.createElement('div');
                schoolLayer.classList.add("title-layer");
                schoolLayer.innerHTML = item["school"].value;
                schoolLayer.dataset.position = item["school"].position;
                schoolLayer.dataset.size = item["school"].size;
                mainContainer.appendChild(schoolLayer);
            }
            if (item["time"] != null) {
                let timeLayer = document.createElement('div');
                timeLayer.classList.add("time-layer");
                timeLayer.innerHTML = formatIfExists(config.educationExperience.time.format, item["time"].value);
                timeLayer.dataset.position = item["time"].position;
                timeLayer.dataset.size = item["time"].size;
                mainContainer.appendChild(timeLayer);
            }
            obj.contents[index].appendChild(mainContainer);
            let detailContainer = document.createElement('div');
            detailContainer.classList.add("detail-container");
            let isFirst = true;
            for (let key in config.educationExperience) {
                if (!key.startsWith("_") && item[key] != null && key != "time") {
                    if (!isFirst) {
                        let detailSeparator = document.createElement('div');
                        detailSeparator.classList.add("detail-separator");
                        detailSeparator.innerHTML = "\|";
                        detailContainer.appendChild(detailSeparator);
                    }
                    let detailLayer = document.createElement('div');
                    detailLayer.classList.add("detail-layer");
                    detailLayer.innerHTML = formatIfExists(config.educationExperience[key].format, item[key].value);
                    detailLayer.dataset.position = item[key].position;
                    detailLayer.dataset.size = item[key].size;
                    detailContainer.appendChild(detailLayer);
                    isFirst = false;
                }
            }
            obj.contents[index++].appendChild(detailContainer);
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
                school: {
                    value: sub[0].text,
                    position: sub[0].position,
                    size: sub[0].raw.length
                }
            }
            let listItems = splitIntoListItems(sub)
            for (let key in config.educationExperience) {
                if (!key.startsWith("_")) {
                    obj[key] = findValueByKeys(listItems, config.educationExperience[key].key)
                }
            }
            data.contents.push(obj)
        }
        return data
    }
}
export { educationExperience }