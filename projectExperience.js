import { findTitle, findValueByKeys, splitIntoListItems, splitSub } from "./baseMatcher.js";
import { config } from "./conf.js";
import { newBaseModel } from "./baseModel.js";
import { formatIfExists } from "./utils.js";
let projectExperience = {
    render: function (data) {
        let obj = newBaseModel("项目经历", data.length)

        for (let i = 0; i < data.length; i++) {
            let mainContainer = document.createElement('div');
            mainContainer.style = config.projectExperience._mainContainerStyle;

            if (data[i]["name"] != null) {
                let nameLayer = document.createElement('div');
                nameLayer.style = config.projectExperience._titleLayerStyle;
                nameLayer.innerHTML = data[i]["name"];
                mainContainer.appendChild(nameLayer);
            }

            if (data[i]["role"] != null) {
                let roleLayer = document.createElement('div');
                roleLayer.style = config.projectExperience._roleLayerStyle;
                roleLayer.innerHTML = formatIfExists(config.projectExperience.role.format, data[i]["role"]);
                mainContainer.appendChild(roleLayer);
            }

            obj.contents[i].appendChild(mainContainer);

            if (data[i]["time"] != null) {
                let timeLayer = document.createElement('div');
                timeLayer.style = config.projectExperience._timeLayerStyle;
                timeLayer.innerHTML = formatIfExists(config.projectExperience.time.format, data[i]["time"]);
                mainContainer.appendChild(timeLayer);
            }
            if (data[i]["technology"] != null) {
                let technologyLayer = document.createElement('div');
                technologyLayer.style = config.projectExperience._technologyLayerStyle;
                technologyLayer.innerHTML = formatIfExists(config.projectExperience.technology.format, data[i]["technology"]);;
                obj.contents[i].appendChild(technologyLayer);
            }
            if (data[i]["url"] != null) {
                let urlLayer = document.createElement('div');
                urlLayer.style = config.projectExperience._urlLayerStyle;
                urlLayer.innerHTML = formatIfExists(config.projectExperience.url.format, data[i]["url"]);
                obj.contents[i].appendChild(urlLayer);
            }


            if (data[i]["content"] != null) {
                let contentLayer = document.createElement('div');
                contentLayer.style = config.projectExperience._contentLayerStyle
                contentLayer.innerHTML = formatIfExists(config.projectExperience.content.format, data[i]["content"]);
                obj.contents[i].appendChild(contentLayer);
            }

        }

        return obj.container
    },
    parse: function (str) {
        let data = [];
        let subs = splitSub(str)

        for (let item of subs) {
            let obj = {}
            obj["name"] = findTitle(item)

            let listItems = splitIntoListItems(item);

            for (let key in config.projectExperience) {
                if (!key.startsWith("_")) {
                    obj[key] = findValueByKeys(listItems, config.projectExperience[key].key);
                }
            }
            if(obj["hide"]!=null){
                continue;
            }

            data.push(obj)
        }
        return data
    }
}
export { projectExperience }