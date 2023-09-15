import { findTitle, findValueByKeys, splitIntoListItems, splitSub } from "./baseMatcher.js";
import { config } from "./conf.js";
import { newBaseModel } from "./baseModel.js";
import { formatIfExists } from "./utils.js";
let workExperience = {
    render: function (data) {
        let obj = newBaseModel("工作经历", data.contents.length)
        obj.container.dataset.position = data.position;
        obj.container.dataset.size = data.size;
        for (let i = 0; i < data.contents.length; i++) {
            let mainContainer = document.createElement('div');
            mainContainer.style = config.workExperience._mainContainerStyle;
            mainContainer.dataset.position = data.contents[i].position;
            mainContainer.dataset.position = data.contents[i].size;
            if (data.contents[i]["company"] != null) {
                let companyLayer = document.createElement('div');
                companyLayer.style = config.workExperience._titleLayerStyle;
                companyLayer.innerHTML = data.contents[i]["company"].value;
                companyLayer.dataset.position = data.contents[i]["company"].position;
                companyLayer.dataset.size = data.contents[i]["company"].size;
                mainContainer.appendChild(companyLayer);
            }

            if (data.contents[i]["department"] != null) {
                let departmentLayer = document.createElement('div');
                departmentLayer.style = config.workExperience._departmentLayerStyle;
                departmentLayer.innerHTML = formatIfExists(config.workExperience.department.format, data.contents[i]["department"].value);
                departmentLayer.dataset.position = data.contents[i]["department"].position;
                departmentLayer.dataset.size = data.contents[i]["department"].size;
                mainContainer.appendChild(departmentLayer);
            }

            if (data.contents[i]["position"] != null) {
                let positionLayer = document.createElement('div');
                positionLayer.style = config.workExperience._positionLayerStyle;
                positionLayer.innerHTML = formatIfExists(config.workExperience.position.format, data.contents[i]["position"].value);
                positionLayer.dataset.position = data.contents[i]["position"].position;
                positionLayer.dataset.size = data.contents[i]["position"].size;
                mainContainer.appendChild(positionLayer);
            }
            if (data.contents[i]["practice"] != null) {
                let practiceLayer = document.createElement('div');
                practiceLayer.style = config.workExperience._practiceLayerStyle;
                practiceLayer.innerHTML = formatIfExists(config.workExperience.practice.format, "实习");
                practiceLayer.dataset.position = data.contents[i]["practice"].position;
                practiceLayer.dataset.size = data.contents[i]["practice"].size;
                mainContainer.appendChild(practiceLayer);
            }
            if (data.contents[i]["time"] != null) {
                let timeLayer = document.createElement('div');
                timeLayer.style = config.workExperience._timeLayerStyle;
                timeLayer.innerHTML = formatIfExists(config.workExperience.time.format, data.contents[i]["time"].value);
                timeLayer.dataset.position = data.contents[i]["time"].position;
                timeLayer.dataset.size = data.contents[i]["time"].size;
                mainContainer.appendChild(timeLayer);
            }

            obj.contents[i].appendChild(mainContainer);

            if (data.contents[i]["content"] != null) {
                let contentLayer = document.createElement('div');
                contentLayer.style = config.workExperience._contentLayerStyle
                contentLayer.innerHTML = formatIfExists(config.workExperience.content.format, data.contents[i]["content"].value);
                contentLayer.dataset.position = data.contents[i]["content"].position;
                contentLayer.dataset.size = data.contents[i]["content"].size;
                obj.contents[i].appendChild(contentLayer);
            }

        }

        return obj.container
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
                company: {
                    value: sub[0].text,
                    position: sub[0].position,
                    size: sub[0].raw.length
                }
            }

            let listItems = splitIntoListItems(sub);
            for (let key in config.workExperience) {
                if (!key.startsWith("_")) {
                    obj[key] = findValueByKeys(listItems, config.workExperience[key].key);
                }
            }
            data.contents.push(obj)
        }

        return data
    }
}
export { workExperience }