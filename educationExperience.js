import { findTitle, findValueByKeys } from "./baseMatcher.js";
import { config } from "./conf.js";
import { formatIfExists } from "./utils.js";
import { splitSub } from "./mdSpliter.js";
import { newBaseModel } from "./baseModel.js";
let educationExperience = {
    render: function (data) {
        let obj = newBaseModel("教育经历", data.length)

        for (let i = 0; i < data.length; i++) {

            let mainContainer = document.createElement('div');
            mainContainer.style = config.educationExperience._mainContainerStyle;

            if (data[i]["school"] != null) {
                let schoolLayer = document.createElement('div');
                schoolLayer.style = config.educationExperience._schoolLayerStyle;
                schoolLayer.innerHTML = data[i]["school"];
                mainContainer.appendChild(schoolLayer);
            }

            if (data[i]["time"] != null) {
                let timeLayer = document.createElement('div');
                timeLayer.style = config.educationExperience._timeLayerStyle;
                timeLayer.innerHTML = formatIfExists(config.educationExperience.time.format, data[i]["time"]);
                mainContainer.appendChild(timeLayer);
            }

            obj.contents[i].appendChild(mainContainer);

            let detailContainer = document.createElement('div');
            detailContainer.style = config.educationExperience._detailContainerStyle;

            let isFirst = true;
            for (let key in config.educationExperience) {

                if (!key.startsWith("_") && data[i][key] != null && key != "time") {
                    if (!isFirst) {
                        let detailSeparator = document.createElement('div');
                        detailSeparator.style = config.educationExperience._detailSeparatorStyle;
                        detailSeparator.innerHTML = "\|";
                        detailContainer.appendChild(detailSeparator);
                    }
                    let detailLayer = document.createElement('div');
                    detailLayer.style = config.educationExperience._detailLayerStyle;
                    detailLayer.innerHTML = formatIfExists(config.educationExperience[key].format, data[i][key]);

                    detailContainer.appendChild(detailLayer);

                    isFirst = false;
                }
            }

            obj.contents[i].appendChild(detailContainer);
        }
        return obj.container;
    },
    parse: function (str) {
        let data = [];

        let subs = splitSub(str)

        for (let item of subs) {

            let obj = {}
            obj["school"] = findTitle(item)

            for (let key in config.educationExperience) {
                if (!key.startsWith("_")) {
                    obj[key] = findValueByKeys(item, config.educationExperience[key].key);
                }
            }
            data.push(obj)
        }

        return data
    }
}
export { educationExperience }