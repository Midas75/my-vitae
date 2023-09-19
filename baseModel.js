export function newBaseModel(title, subItemNumbers = 1) {
    let container = document.createElement('div');
    container.classList.add("container");

    let titleLayer = document.createElement('div');
    titleLayer.classList.add("title-layer");
    titleLayer.innerHTML = title;



    let splitLayer = document.createElement('div');
    splitLayer.classList.add("split-layer");

    let leftSplitLine = document.createElement('div');
    leftSplitLine.classList.add("left-split-line");

    let rightSplitLine = document.createElement('div');
    rightSplitLine.classList.add("right-split-line");

    container.appendChild(titleLayer);

    splitLayer.appendChild(leftSplitLine);
    splitLayer.appendChild(rightSplitLine);
    container.appendChild(splitLayer);

    let contents = []
    for (let i = 0; i < subItemNumbers; i++) {
        let content = document.createElement('div');
        content.classList.add("content-container")
        contents.push(content);
        container.appendChild(content);
    }

    return {
        container: container,
        contents: contents
    }
}