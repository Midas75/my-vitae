import { findTitle, findValueByKeys } from "./baseMatcher.js";
import { config } from "./conf.js";
import { formatIfExists } from "./utils.js";
import { splitSub } from "./mdSpliter.js";
import { newBaseModel } from "./baseModel.js";
let award = {
    render: function (data) {
        let obj = newBaseModel("获奖经历", data.length)

        for (let i = 0; i < data.length; i++) {

            let container = document.createElement('div');
            container.style = config.award._containerStyle;

            if (data[i]["time"] != null && data[i]["name"] != null) {
                let timeLayer = document.createElement('div');
                timeLayer.style = config.award._timeLayerStyle;
                timeLayer.innerHTML = formatIfExists(config.award.time.format, data[i]["time"]);
                container.appendChild(timeLayer);

                let awardLayer = document.createElement('div');
                awardLayer.style=config.award._awardLayerStyle;
                awardLayer.innerHTML=data[i]["name"];
                container.appendChild(awardLayer);
            }

            obj.contents[i].appendChild(container);
        }
        return obj.container;
    },
    parse: function (str) {
        let data = [];

        let subs = splitSub(str)

        

        for (let item of subs) {

            let obj = {}
            obj["name"] = findTitle(item)
            obj["time"] = findValueByKeys(item, config.award.time.key)

            data.push(obj)
        }

        return data
    }
}
export { award }