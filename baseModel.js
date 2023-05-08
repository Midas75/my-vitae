import { config } from "./conf.js";
export function newBaseModel(title) {
    let container = document.createElement('div');
    container.style.width = config.baseModel._containerStyle;

    let titleLayer = document.createElement('div');
    titleLayer.style = config.baseModel._titleLayerStyle;
    titleLayer.innerHTML = title;

    let content = document.createElement('div');

    let splitLayer=document.createElement('div');
    splitLayer.style=config.baseModel._splitLayerStyle;

    let leftSplitLine = document.createElement('div');
    leftSplitLine.style = config.baseModel._leftSplitLineStyle;

    let rightSplitLine = document.createElement('div');
    rightSplitLine.style = config.baseModel._rightSplitLineStyle;

    container.appendChild(titleLayer);
    
    splitLayer.appendChild(leftSplitLine);
    splitLayer.appendChild(rightSplitLine);
    container.appendChild(splitLayer);
    
    container.appendChild(content);
    

    return {
        container:container,
        content:content
    }
}