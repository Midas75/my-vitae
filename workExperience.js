import { findContent, findTitle, findValueByKeys } from "./baseMatcher.js";
import { config } from "./conf.js";
import { formatIfExists } from "./utils.js";
import { newBaseModel } from "./baseModel.js";
import { marked } from "./marked.esm.min.js"
let workExperience = {
    render: function (data) {
        let obj = newBaseModel("工作经历",data.length)

        
        
        return obj.container
    },
    parse: function (str) {
        let data = [];

        let subs = splitSub(str)

        for (let item of subs) {

            let obj = {}
            obj["company"] = findTitle(item)

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
export { workExperience }