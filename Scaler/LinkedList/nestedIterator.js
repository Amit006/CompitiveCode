/*
  // This is the interface that allows for creating nested lists.
function NestedInteger(value) {
    this.integer = value;

    // Return true if this NestedInteger holds a single integer, rather than a nested list.
    this.isInteger = function() {
    };

    // Return the single integer that this NestedInteger holds, if it holds a single integer
    this.getInteger = function() {
    };

    // Return the nested list that this NestedInteger holds, if it holds a nested list
    this.getList = function() {
    };
};
*/

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */

class Node {
    constructor(value){
        this.value = value;
        this.next =  null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + '->';
            current = current.next;
        }
        result += 'NULL';
        return result;
    }


}


var NestedIterator = function (nestedList) {
    this.linkList = new LinkList();
    this.flatten(nestedList);
};



/**
 * @returns {boolean}
 */
NestedIterator.prototype.flatten = function (list) {
    for (let item of list) {
        if (item.isInteger()) {
            this.linkList.insert(item.getInteger());
        } else {
            this.flatten(item.getList());
        }
    }
};

/**
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    return this.linkList.head !== null;
};

/**
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    let List = this.linkList;
    if (List.head) {
        let value = List.head.value;
        List.head = List.head.next;
        return value;
    }
    return null;

};