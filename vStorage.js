/**
 * vStorage存在的目的是实现文件的浏览器端存储
 */
async function executeInDB(f, dbName, dbVersion, tableName, keyPath) {
    return new Promise((resolve, reject) => {
        dbVersion = dbVersion ?? 1;
        const request = indexedDB.open(dbName, dbVersion);
        request.onupgradeneeded = function (e) {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(tableName)) {
                db.createObjectStore(tableName, { keyPath: keyPath });
            }
        }
        request.onerror = function (e) {
            reject(e.target.error);
        }
        request.onsuccess = function (e) {
            const db = e.target.result;
            resolve(f(db));
        }
    })

}
async function setItemInDB(key, value, dbName, dbVersion, tableName) {
    return new Promise((resolve, reject) => {
        const mode = "readwrite";
        const keyPath = 'key';
        executeInDB(
            (db) => {
                const transaction = db.transaction(tableName, mode);
                const store = transaction.objectStore(tableName);
                const data = {}
                data[keyPath] = key;
                data['value'] = value;
                const addRequest = store.add(data);
                addRequest.onsuccess = function (e) {
                    resolve(key);
                }
                addRequest.onerror = function (e) {
                    reject(e.target.error);
                }
            },
            dbName,
            dbVersion,
            tableName,
            keyPath
        )
    })
}
export async function getItemFromDB(key, dbName, dbVersion, tableName) {
    return new Promise((resolve, reject) => {
        const mode = "readonly";
        const keyPath = 'key';
        executeInDB((db) => {
            const transaction = db.transaction(tableName, mode);
            const store = transaction.objectStore(tableName);
            const getRequest = store.get(key);
            getRequest.onsuccess = function (e) {
                resolve(e.target.result.value);
            }
            getRequest.onerror = function (e) {
                reject(e.target.error);
            }
        }, dbName, dbVersion, tableName, keyPath
        )
    })
}
export async function upload(file, path) {
    return new Promise(async (resolve, reject) => {
        resolve(await setItemInDB(path ?? file.name, file, "my_vitae", 1, "file"));
    })
}