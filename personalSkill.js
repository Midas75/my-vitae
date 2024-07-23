import { newBaseModel } from "./baseModel.js";
import { marked } from "./marked.esm.min.js"
let personalSkill = {
    render: function (data) {
        let obj = newBaseModel(data.title, data.contents.length)
        obj.container.dataset.position = data.position;
        obj.container.dataset.size = data.size;
        for (let i = 0; i < data.contents.length; i++) {
            obj.contents[i].classList.add("ps-content-layer")
            obj.contents[i].innerHTML = marked.parse(data.contents[i].raw)
            obj.contents[i].dataset.position = data.contents[i].position
            obj.contents[i].dataset.size = data.contents[i].raw.length
        }
        return obj.container
    },
    parse: function (tokens) {
        let data = {
            position: tokens[0].position,
            size: tokens[0].raw.length,
            contents: tokens.slice(1),
            title: tokens[0].tokens[0].text
        }
        return data
    }
}
export { personalSkill }