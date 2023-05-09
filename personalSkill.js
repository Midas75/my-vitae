import { findContent } from "./baseMatcher.js";
import { newBaseModel } from "./baseModel.js";
import { marked } from "./marked.esm.min.js"
let personalSkill = {
    render: function (data) {
        let obj = newBaseModel("个人技能")

        obj.contents[0].innerHTML = marked.parse(data.content)

        return obj.container
    },
    parse: function (str) {
        return {
            content:findContent(str)
        }
    }
}
export { personalSkill }