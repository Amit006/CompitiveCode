/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cache = new Map();
    this.cacheSize = capacity;

    this.adjustCapacity = (cacheInstance) => {
        while (cacheInstance.size == this.cacheSize) {
                const lastKey = cacheInstance.keys().next().value;
            cacheInstance.delete(lastKey);
        }
    };
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        const value = this.cache.get(key);

        //Refresh recency: move this key to the end
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    } else return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    this.adjustCapacity(this.cache);
    if(this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
};

//  * Your LRUCache object will be instantiated and called as such:
var obj;
const operation = [
    "LRUCache",
    "put",
    "put",
    "get",
    "put",
    "get",
    "put",
    "get",
    "get",
    "get",
];

const operation2 = ["LRUCache","get","put","get","put","put","get","get"];

const input = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];
const input2 = [[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]];

for (let i = 0; i < operation2.length; i++) {
    if (operation2[i] === "LRUCache") {
        obj = new LRUCache(...input2[i]);
    } else if (operation2[i] === "put") {
        obj.put(...input2[i]);
    } else if (operation2[i] === "get") {
        const param_1 = obj.get(...input2[i]);
        console.log(param_1);
    }
    // console.log(obj);
}
