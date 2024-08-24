import { expandATag, removeATag, split } from "./baseMatcher.js";
import { personalInformation } from "./personalInformation.js"
import { educationExperience } from "./educationExperience.js"
import { award } from "./award.js"
import { personalSkill } from "./personalSkill.js"
import { workExperience } from "./workExperience.js"
import { projectExperience } from "./projectExperience.js"
import { bindJumperByPosition, setLinkBehavior } from "./postRenderer.js"
import {
    initMessageList,
    loadLinksTo,
    removeLinksFrom,
    showMessage
} from "./uiCreator.js"
class CurriculumVitae {
    rawData = "";
    preview = {};
    editor = null;
    message = null;
    titleModuleMap = {};
    option = {};
    styles = ["main", "autumn", "simple"]
    style = 0
    gray = false
    constructor(data,
        previewContainer,
        style = 0,
        editorContainer = null,
        messageContainer = null) {
        this.rawData = data
        this.preview.container = previewContainer
        this.preview.iframe = document.createElement("iframe")
        this.preview.iframe.classList.add("preview")
        this.preview.container.appendChild(this.preview.iframe)
        this.preview.window = this.preview.iframe.contentWindow
        this.preview.document = this.preview.window.document
        this.preview.body = this.preview.document.body
        if (editorContainer != null) {
            this.editor = {}
            this.editor.container = editorContainer
            this.editor.iframe = document.createElement("iframe")
            this.editor.iframe.classList.add("editor")
            this.editor.container.appendChild(this.editor.iframe)
            this.editor.window = this.editor.iframe.contentWindow
            this.editor.document = this.editor.window.document
            this.editor.body = this.editor.document.body
            this.editor.area = document.createElement("textarea")
            this.editor.area.setAttribute("contenteditable", true)
            this.editor.area.setAttribute("user-modify", "read-write-plaintext-only")
            this.editor.area.classList.add("area")
            this.editor.body.appendChild(this.editor.area)
            this.editor.area.value = data
            this.editor.area.onkeyup = () => {
                this.rawData = this.editor.area.value
                this.render()
            }
            
        }
        if (messageContainer != null) {
            this.message = {};
            this.message.container = messageContainer;
            this.message.list = initMessageList(this.message.container)
        }
        this.titleModuleMap = {
            "个人信息": personalInformation,
            "教育经历": educationExperience,
            "获奖经历": award,
            "个人技能": personalSkill,
            "工作经历": workExperience,
            "项目经历": projectExperience,
        }
        this.option.showLink = 0
        this.setStyle(style, true)
        this.render()
    }
    showMessage(content) {
        if (this.message == null) {
            return
        }
        showMessage(this.message.list, content)
    }
    render() {
        this.preview.body.innerHTML = "";
        let subTokens = split(this.rawData)
        for (let token of subTokens) {
            if (this.titleModuleMap[token.type] != null) {
                let parsedData = this.titleModuleMap[token.type].parse(token.tokens)
                let renderedData = this.titleModuleMap[token.type].render(parsedData)
                this.preview.body.appendChild(renderedData)
            }
        }
        this.postProcess();
    }
    postProcess() {
        switch (this.option.showLink) {
            case 0:
                break;
            case 1:
                removeATag(this.preview.document);
                break;
            case 2:
                expandATag(this.preview.document);
                break;
        }

        if (this.editor != null) {
            bindJumperByPosition(this.editor.area, this.preview.document)
        }

        setLinkBehavior(this.preview.document)
    }
    setStyle(style, slient) {
        this.style = style
        this.loadStyle()
        if (!slient) {
            this.showMessage(`风格切换到 ${this.getStyle()}`)
        }

    }
    loadStyle(clear) {
        let style = this.getStyle()
        loadLinksTo(document, [
            `css/${style}/page.css`
        ])
        loadLinksTo(this.preview.document,
            [`css/${style}/preview/preview.css`,
            `css/${style}/preview/personalInformation.css`,
            `css/${style}/preview/educationExperience.css`,
            `css/${style}/preview/award.css`,
            `css/${style}/preview/workExperience.css`,
            `css/${style}/preview/projectExperience.css`,
            `css/${style}/preview/personalSkill.css`],
            clear
        )
        if (this.editor != null) {
            loadLinksTo(this.editor.document, [
                `css/${style}/editor.css`
            ], clear)
        }
        if (this.message != null) {
            loadLinksTo(document, [
                `css/${style}/message.css`
            ], clear)
        }
    }
    getStyle() {
        return this.styles[this.style]
    }
    setGrayPreview(gray) {
        this.gray = gray
        let grayCssPath = `css/${this.getStyle()}/preview/gray.css`
        if (this.gray) {
            this.showMessage("灰度显示，注意该显示仅供黑白打印机的纸质打印效果预览")
            loadLinksTo(this.preview.document, grayCssPath)
        }
        else {
            this.showMessage("彩色显示")
            removeLinksFrom(this.preview, grayCssPath)
        }
    }
    toggleGrayPreview() {
        this.setGrayPreview(!this.gray)
    }
    setLinkPreview(type) {
        this.option.showLink = type
        this.render()
    }
    toggleLinkPreview() {
        this.setLinkPreview((this.option.showLink + 1) % 3)
    }
}
export { CurriculumVitae }