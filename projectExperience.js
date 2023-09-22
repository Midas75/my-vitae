import { findTitle, findValueByKeys, splitIntoListItems, splitSub } from "./baseMatcher.js";
import { config } from "./conf.js";
import { newBaseModel } from "./baseModel.js";
import { formatIfExists } from "./utils.js";
let projectExperience = {
    render: function (data,option={}) {
        let obj = newBaseModel("项目经历", data.contents.length)
        obj.container.dataset.position = data.position;
        obj.container.dataset.size = data.size;
        for (let i = 0; i < data.contents.length; i++) {
            let mainContainer = document.createElement('div');
            mainContainer.classList.add("pe-main-container");
            mainContainer.dataset.position = data.contents[i].position;
            mainContainer.dataset.position = data.contents[i].size;
            if (data.contents[i]["name"] != null) {
                let nameLayer = document.createElement('div');
                nameLayer.classList.add("pe-title-layer");
                nameLayer.innerHTML = data.contents[i]["name"].value;
                nameLayer.dataset.position = data.contents[i]["name"].position;
                nameLayer.dataset.size = data.contents[i]["name"].size;
                mainContainer.appendChild(nameLayer);
            }

            if (data.contents[i]["role"] != null) {
                let roleLayer = document.createElement('div');
                roleLayer.classList.add("pe-role-layer");
                roleLayer.innerHTML = formatIfExists(config.projectExperience.role.format, data.contents[i]["role"].value);
                roleLayer.dataset.position = data.contents[i]["role"].position;
                roleLayer.dataset.size = data.contents[i]["role"].size;
                mainContainer.appendChild(roleLayer);
            }

            obj.contents[i].appendChild(mainContainer);

            if (data.contents[i]["time"] != null) {
                let timeLayer = document.createElement('div');
                timeLayer.classList.add("pe-time-layer");
                timeLayer.innerHTML = formatIfExists(config.projectExperience.time.format, data.contents[i]["time"].value);
                timeLayer.dataset.position = data.contents[i]["time"].position;
                timeLayer.dataset.size = data.contents[i]["time"].size;
                mainContainer.appendChild(timeLayer);
            }
            if (data.contents[i]["technology"] != null) {
                let technologyLayer = document.createElement('div');
                technologyLayer.classList.add("pe-technology-container");
                let tagArrary = formatIfExists(config.projectExperience.technology.format, data.contents[i]["technology"].value).split("、");
                for (let item of tagArrary) {
                    let tag = document.createElement('div');
                    tag.classList.add("pe-technology-tag");
                    tag.innerHTML = item;
                    technologyLayer.appendChild(tag);
                }
                technologyLayer.dataset.position = data.contents[i]["technology"].position;
                technologyLayer.dataset.size = data.contents[i]["technology"].size;
                obj.contents[i].appendChild(technologyLayer);
            }
            if (data.contents[i]["url"] != null&&option.showLink!=1) {
                let urlLayer = document.createElement('div');
                urlLayer.classList.add("pe-url-layer");
                urlLayer.innerHTML = formatIfExists(config.projectExperience.url.format, data.contents[i]["url"].value);
                urlLayer.dataset.position = data.contents[i]["url"].position;
                urlLayer.dataset.size = data.contents[i]["url"].size;
                obj.contents[i].appendChild(urlLayer);
            }


            if (data.contents[i]["content"] != null) {
                let contentLayer = document.createElement('div');
                contentLayer.classList.add("pe-content-layer");
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