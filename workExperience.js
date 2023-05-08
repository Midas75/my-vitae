import { findTitle, findValueByKeys,splitSub } from "./baseMatcher.js";
import { config } from "./conf.js";
import { newBaseModel } from "./baseModel.js";
import { Lexer, marked } from "./marked.esm.min.js"
let workExperience = {
    render: function (data) {
        let obj = newBaseModel("工作经历", data.length)

        for (let i = 0; i < data.length; i++) {

            let mainContainer = document.createElement('div');
            mainContainer.style = config.workExperience._mainContainerStyle;

            if (data[i]["company"] != null) {
                let companyLayer = document.createElement('div');
                companyLayer.style = config.workExperience._companyLayerStyle;
                companyLayer.innerHTML = data[i]["company"];
                mainContainer.appendChild(companyLayer);
            }

            if (data[i]["department"] != null) {
                let departmentLayer = document.createElement('div');
                departmentLayer.style = config.workExperience._departmentLayerStyle;
                departmentLayer.innerHTML = data[i]["department"];
                mainContainer.appendChild(departmentLayer);
            }

            if (data[i]["position"] != null) {
                let positionLayer = document.createElement('div');
                positionLayer.style = config.workExperience._positionLayerStyle;
                positionLayer.innerHTML = data[i]["position"];
                mainContainer.appendChild(positionLayer);
            }

            if (data[i]["time"] != null) {
                let timeLayer = document.createElement('div');
                timeLayer.style = config.workExperience._timeLayerStyle;
                timeLayer.innerHTML = data[i]["time"];
                mainContainer.appendChild(timeLayer);
            }

            if (data[i]["content"] != null) {
                let contentLayer = document.createElement('div');
                contentLayer.innerHTML = marked.parse(data[i]["content"]);
                mainContainer.appendChild(contentLayer);
            }
            obj.contents[i].appendChild(mainContainer);
        }

        return obj.container
    },
    parse: function (str) {
        let data = [];
        let subs = splitSub(str)
        
        for (let item of subs) {
            let lex=Lexer.lex(item)
            let obj = {}
            obj["company"] = findTitle(item)

            for (let key in config.workExperience) {
                if (!key.startsWith("_")) {
                    obj[key] = findValueByKeys(item, config.workExperience[key].key);
                }
            }
            data.push(obj)
        }

        return data
    }
}
export { workExperience }