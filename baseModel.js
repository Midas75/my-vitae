import { config } from "./conf.js";
export function newBaseModel(title, subItemNumbers = 1) {
    let container = document.createElement('div');
    container.style = config.baseModel._containerStyle;

    let titleLayer = document.createElement('div');
    titleLayer.style = config.baseModel._titleLayerStyle;
    titleLayer.innerHTML = title;



    let splitLayer = document.createElement('div');
    splitLayer.style = config.baseModel._splitLayerStyle;

    let leftSplitLine = document.createElement('div');
    leftSplitLine.style = config.baseModel._leftSplitLineStyle;

    let rightSplitLine = document.createElement('div');
    rightSplitLine.style = config.baseModel._rightSplitLineStyle;

    container.appendChild(titleLayer);

    splitLayer.appendChild(leftSplitLine);
    splitLayer.appendChild(rightSplitLine);
    container.appendChild(splitLayer);

    let contents = []
    for (let i = 0; i < subItemNumbers; i++) {
        let content = document.createElement('div');
        content.style = config.baseModel._contentContainerStyle;
        contents.push(content);
        container.appendChild(content);
    }



    return {
        container: container,
        contents: contents
    }
}