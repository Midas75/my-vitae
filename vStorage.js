/**
 * vStorage存在的目的是实现文件的浏览器端存储
 */
export async function init(dbName, dbVersion,tableName,keyPath) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName ?? "MyVitaeDB", dbVersion ?? 1);
        const tableName=tableName??"files";
        const keyPath=keyPath??"path";
        request.onupgradeneeded = function (e) {
            const db = e.target.result;

            // 创建一个存储对象，如果不存在的话
            if (!db.objectStoreNames.contains(tableName)) {
                db.createObjectStore(tableName, { keyPath: keyPath });
            }
        };
        request.onerror = function (e) {
            reject(e.target.error);
        }
        request.onsuccess = function (e) {
            const db = e.target.result;
            resolve(db);
        }
    })
}
export async function upload(db, file, path) {
    const db = db ?? await init();
    const transaction=db.transaction(["files"],"readwrite");
    const store=transaction.objectStore("files");
    request.onsuccess = function (e) {
        const db = e.target.result;

        const transaction = db.transaction(["files"], "readwrite");
        const store = transaction.objectStore("files");

        const fileData = {
            id: path ?? file.name,
            name: file.name,
            type: file.type,
            data: file,
        };
        const addRequest = store.add(fileData);

        addRequest.onsuccess = function (e) {
            console.log(e);
        }
        addRequest.onerror = function (event) {
            console.error("存储文件到IndexedDB出错:", event.target.error);
        };

        transaction.oncomplete = function () {
            db.close();
        };
    }

}
export function getStorageUsage() {
    navigator.storage.estimate().then(function (estimate) {
        console.log(estimate.quota / 1024 / 1024 + " MB");
    })
}