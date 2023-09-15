import { findTitle, findValueByKeys, splitIntoListItems, splitSub } from "./baseMatcher.js";
import { config } from "./conf.js";
import { newBaseModel } from "./baseModel.js";
import { formatIfExists } from "./utils.js";
let projectExperience = {
    render: function (data) {
        let obj = newBaseModel("项目经历", data.contents.length)

        for (let i = 0; i < data.contents.length; i++) {
            let mainContainer = document.createElement('div');
            mainContainer.style = config.projectExperience._mainContainerStyle;
            mainContainer.dataset.position = data.contents[i].position;
            mainContainer.dataset.position = data.contents[i].size;
            if (data.contents[i]["name"] != null) {
                let nameLayer = document.createElement('div');
                nameLayer.style = config.projectExperience._titleLayerStyle;
                nameLayer.innerHTML = data.contents[i]["name"].value;
                nameLayer.dataset.position = data.contents[i]["name"].position;
                nameLayer.dataset.size = data.contents[i]["name"].size;
                mainContainer.appendChild(nameLayer);
            }

            if (data.contents[i]["role"] != null) {
                let roleLayer = document.createElement('div');
                roleLayer.style = config.projectExperience._roleLayerStyle;
                roleLayer.innerHTML = formatIfExists(config.projectExperience.role.format, data.contents[i]["role"].value);
                roleLayer.dataset.position = data.contents[i]["role"].position;
                roleLayer.dataset.size = data.contents[i]["role"].size;
                mainContainer.appendChild(roleLayer);
            }

            obj.contents[i].appendChild(mainContainer);

            if (data.contents[i]["time"] != null) {
                let timeLayer = document.createElement('div');
                timeLayer.style = config.projectExperience._timeLayerStyle;
                timeLayer.innerHTML = formatIfExists(config.projectExperience.time.format, data.contents[i]["time"].value);
                timeLayer.dataset.position = data.contents[i]["time"].position;
                timeLayer.dataset.size = data.contents[i]["time"].size;
                mainContainer.appendChild(timeLayer);
            }
            if (data.contents[i]["technology"] != null) {
                let technologyLayer = document.createElement('div');
                technologyLayer.style = config.projectExperience._technologyContainerStyle;
                let tagArrary = formatIfExists(config.projectExperience.technology.format, data.contents[i]["technology"].value).split("、");
                for (let item of tagArrary) {
                    let tag = document.createElement('div');
                    tag.style = config.projectExperience._technologyTagStyle;
                    tag.innerHTML = item;
                    technologyLayer.appendChild(tag);
                }
                technologyLayer.dataset.position = data.contents[i]["technology"].position;
                technologyLayer.dataset.size = data.contents[i]["technology"].size;
                obj.contents[i].appendChild(technologyLayer);
            }
            if (data.contents[i]["url"] != null) {
                let urlLayer = document.createElement('div');
                urlLayer.style = config.projectExperience._urlLayerStyle;
                urlLayer.innerHTML = formatIfExists(config.projectExperience.url.format, data.contents[i]["url"].value);
                urlLayer.dataset.position = data.contents[i]["url"].position;
                urlLayer.dataset.size = data.contents[i]["url"].size;
                obj.contents[i].appendChild(urlLayer);
            }


            if (data.contents[i]["content"] != null) {
                let contentLayer = document.createElement('div');
                contentLayer.style = config.projectExperience._contentLayerStyle
                contentLayer.innerHTML = formatIfExists(config.projectExperience.content.format, data.contents[i]["content"].value);
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
                name: {
                    value: sub[0].text,
                    position: sub[0].position,
                    size: sub[0].raw.length
                }
            }

            let listItems = splitIntoListItems(sub);

            for (let key in config.projectExperience) {
                if (!key.startsWith("_")) {
                    obj[key] = findValueByKeys(listItems, config.projectExperience[key].key);
                }
            }
            if (obj["hide"] != null) {
                continue;
            }

            data.contents.push(obj)
        }
        return data
    }
}
export { projectExperience }