/**
 * vStorage存在的目的是实现文件的浏览器端存储
 */
function executeInDB(f, dbName, dbVersion, objectStoreName, keyPath) {
    return new Promise((resolve, reject) => {
        dbVersion = dbVersion ?? Date.now();
        const request = indexedDB.open(dbName, dbVersion);
        request.onupgradeneeded = function (e) {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(objectStoreName)) {
                db.createObjectStore(objectStoreName, { keyPath: keyPath });
            }
        }
        request.onerror = function (e) {
            reject(e.target.error);
        }
        request.onsuccess = async function (e) {
            const db = e.target.result;
            resolve(await f(db));
        }
    })

}
export async function setItemInDB(key, value, objectStoreName, dbName, dbVersion) {
    const mode = "readwrite";
    const keyPath = "key";
    return await executeInDB(
        (db) => {
            return new Promise((resolve, reject) => {
                const transaction = db.transaction(objectStoreName, mode);
                const store = transaction.objectStore(objectStoreName);
                const data = {}
                data[keyPath] = key;
                data['value'] = value;
                const putRequest = store.put(data);
                putRequest.onsuccess = function (e) {
                    db.close();
                    resolve(key);
                }
                putRequest.onerror = function (e) {
                    db.close();
                    reject(e.target.error);
                }
            })
        },
        dbName,
        dbVersion ?? Date.now(),
        objectStoreName,
        keyPath
    );
}
export async function getItemFromDB(key, objectStoreName, dbName, dbVersion) {
    const mode = "readonly";
    const keyPath = "key";
    return await executeInDB((db) => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(objectStoreName, mode);
            const store = transaction.objectStore(objectStoreName);
            const getRequest = store.get(key);
            getRequest.onsuccess = function (e) {
                db.close();
                resolve(e.target.result.value);
            }
            getRequest.onerror = function (e) {
                db.close();
                reject(e.target.error);
            }
        })
    }, dbName, dbVersion ?? Date.now(), objectStoreName, keyPath
    )
}
export async function getAllKeysFromDB(objectStoreName, dbName, dbVersion) {
    const mode = "readonly";
    const keyPath = "key";
    return await executeInDB((db) => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(objectStoreName, mode);
            const store = transaction.objectStore(objectStoreName);
            const getAllKeysRequest = store.getAllKeys();
            getAllKeysRequest.onsuccess = function (e) {
                db.close();
                resolve(e.target.result);
            }
            getAllKeysRequest.onerror = function (e) {
                db.close();
                reject(e.target.error);
            }
        })
    }, dbName, dbVersion ?? Date.now(), objectStoreName, keyPath)
}
export async function upload(file, path) {
    return await setItemInDB(path ?? file.name, file, "file", "my_vitae")
}
export async function createFolder(path) {
    return await setItemInDB(path, null, "folder", "my_vitae")
}
function putPathsToResult(paths, type, result) {
    type = type ?? "file";
    result = result ?? {};
    for (const path of paths) {
        let parts = path.split(/[/\\]+/);
        let currentDir = result;
        if (parts[0] === "") parts.shift();
        if (parts[parts.length - 1] === "") parts.pop();
        for (let i = 0; i < parts.length; i++) {
            let part = parts[i]
            if (i == parts.length - 1 && (!currentDir[part])) {
                currentDir[part] = type == "file" ? path : new Object();
            }
            if (part === ".") {
                continue;
            }
            currentDir = (currentDir[part] ?? (currentDir[part] = {}))
        }
    }
    return result;
}
export async function dir() {
    let result = putPathsToResult(await getAllKeysFromDB("file", "my_vitae"))
    putPathsToResult(await getAllKeysFromDB("folder", "my_vitae"), "folder", result)
    return result;
}
export function deleteFile(selected, noAlert) {
    for (let item of selected) {
    }
}
function getDownDropDiv() {
    let div = document.createElement('div');
    div.classList.add("down-drop");
    div.classList.add("selected-item");
    return div;
}
export function drawDirectory(dir, div, f, currentPath, result) {
    result = result ?? {
        selectedItem: null,
        selectedPath: null
    }
    let keys = Object.keys(dir);
    const keyTypePairs = keys.map(key => ({ key, type: typeof dir[key] }))
    keyTypePairs.sort((a, b) => {
        if (a.type === "object" && b.type === "string") {
            return -1;
        } else if (a.type === "string" && b.type === "object") {
            return 1;
        }
        else {
            return a.key.localeCompare(b.key);
        }
    })
    keys = keyTypePairs.map(pair => pair.key);
    for (let key of keys) {
        let path = currentPath ? `${currentPath}/${key}` : key
        let item = document.createElement("div");
        let titleItem = document.createElement("div");
        let listItem = document.createElement("div");
        item.classList.add("storage-item");
        titleItem.classList.add("title-item");
        listItem.classList.add("list-item");
        item.append(titleItem);
        item.append(listItem);
        div.append(item);
        if (dir[key] instanceof Object) {
            let downDropDiv = getDownDropDiv();
            titleItem.append(downDropDiv);
            titleItem.append(`📁 ${key}`);
            item.addEventListener('mousemove', (e) => {
                e.stopPropagation();
                if (result.selectedItem) {
                    result.selectedItem.classList.remove("selected-item");
                }
                result.selectedItem = listItem;
                result.selectedPath = path;
                listItem.classList.add("selected-item");
            })
            item.addEventListener('transitionend', (e) => {
                if (listItem.dataset.fold) {
                } else {
                    item.style.height = "auto";
                }
            })
            titleItem.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                downDropDiv.classList.toggle("fold");
                if (listItem.dataset.fold) {
                    delete listItem.dataset.fold;
                    item.style.height = `${titleItem.offsetHeight + listItem.offsetHeight}px`
                }
                else {
                    item.style.height = `${titleItem.offsetHeight + listItem.offsetHeight}px`
                    item.style.height = `${titleItem.offsetHeight}px`
                    listItem.dataset.fold = true;
                }
            })
            drawDirectory(dir[key], listItem, f, path, result)
        }
        else {
            titleItem.innerText = `🎨 ${key}`
            titleItem.addEventListener('dblclick', (e) => {
                f(dir[key])
            })
        }
    }
    return result;
}
export function _dir(keys) {
    let result = {
        "": {
            id: "",
            type: "d",
            name: "root",
            children: []
        }
    };
    const regex = /^(\d+):(\d*):(d|f):(.*)$/;
    for (let key of keys) {
        let match = key.match(regex);
        if (!match) continue;
        if (result[match[1]]) continue;
        result[match[1]] = {
            id: match[1],
            parentId: match[2],
            type: match[3],
            name: match[4],
            children: []
        }
    }
    for (let key in result) {
        if (key === "") continue;
        if (!result[result[key].parentId]) {
            result[key].parentId = "";
        }
        result[result[key].parentId].children.push(key);
    }
    for (let key in result) {
        if (result[key].children.length == 0) continue;
        else {
            result[key].children.sort(
                (k1, k2) => {
                    if (result[k1].type === "d" && result[k2].type === "f") {
                        return -1;
                    }
                    else if (result[k1].type === "f" && result[k2].type === "d") {
                        return 1;
                    } else {
                        return result[k1].name.localeCompare(result[k2].name);
                    }
                }
            )
        }
    }
    return result;
}
export function diff(tree, isNew, visit, id, col, row) {
    id = id ?? "";
    visit = visit ?? {}
    col = col ?? 0;
    row = row ?? { value: 0 };
    row.value += 1;
    let node = tree[id];
    let index = isNew ? 1 : 0;
    if (!visit[id]) {
        visit[id] = {
            node: [],
            col: [],
            row: []
        }
    }
    
    visit[id].node[index] = node;
    visit[id].col[index] = col;
    visit[id].row[index] = row.value;
    for (let i = 0; i < node.children.length; i++) {
        diff(tree, isNew, visit, node.children[i], col + 1, row)
    }
    return visit;
}