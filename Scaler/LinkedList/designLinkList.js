/*
Q2. Design Linked list

Using hints except Complete Solution is Penalty free now

Problem Description :-- 

Given a matrix A of size Nx3 representing operations. Your task is to design the linked list based on these operations.

There are four types of operations:

0 x -1: Add a node of value x before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
1 x -1: Append a node of value x to the last element of the linked list.
2 x index: Add a node of value x before the indexth node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
3 index -1: Delete the indexth node in the linked list, if the index is valid.
A[i][0] represents the type of operation.

A[i][1], A[i][2] represents the corresponding elements with respect to type of operation.

Note: Indexing is 0 based.


Problem Constraints

1 <= Number of operations <= 1000
1 <= All node values <= 109


Input Format

The only argument given is matrix A.


Output Format

Return the pointer to the starting of the linked list.


Example Input

Input 1:
    A = [   [0, 1, -1]
            [1, 2, -1]
            [2, 3, 1]   ]
Input 2:
    A = [   [0, 1, -1]
            [1, 2, -1]
            [2, 3, 1]
            [0, 4, -1]
            [3, 1, -1]
            [3, 2, -1]  ]


Example Output

Output 1:
    1->3->2->NULL
 
Output 2:
    4->3->NULL





*/

// node defination
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  unShiftNode(Node) {
    const temp = this.head;
    this.head = Node;
    this.head.next = temp;
    this.size++;
    if (this.tail === null) {
      this.tail = Node;
    }
  }

  appendNode(Node) {
    if (this.head === null) {
      this.head = Node;
      this.tail = Node;
    } else {
      this.tail.next = Node;
      this.tail = Node;
    }
    this.size++;
  }

  insertNodeAtIndex(Node, Index) {
    if (Index < 0 || Index > this.size) {
      return;
    }

    if (Index === 0) {
      this.unShiftNode(Node);
      return;
    } else if (Index === this.size) {
      this.appendNode(Node);
      return;
    } else {
      let current = this.head;
      let count = 0;
      while (current != null && count < Index - 1) {
        current = current.next;
        count++;
      }

      if (current != null) {
        Node.next = current.next;
        current.next = Node;
        this.size++;
      }
    }
  }

  deletNodeAtIndex(index) {
    if ( index < 0 && index > this.size) {
      return;
    }

    if (index == 0) {
      this.head = this.head.next || null;
      this.size--;
      if (this.size === 0) {
        this.tail = null;
      }
    } else if (index === this.size) {
      let current = this.head;
      let count = 0;
      while (current != null && count < index - 1) {
        current = current.next;
        count++;
      }
      if (current != null) {
        current.next = null;
        this.tail = current;
        this.size--;
      }
    } else {
      let current = this.head;
      let count = 0;
      while (current != null && count < index - 1) {
        current = current.next;
        count++;
      }

      if (current != null && current.next != null) {
        current.next = current.next.next;
        this.size--;
        if (current.next === null) {
          this.tail = current;
        }
      }
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}

let Input = [
  [1, 13, -1],
  [3, 0, -1],
  [3, 1, -1],
  [2, 15, 0],
  [3, 0, -1],
  [1, 12, -1],
  [3, 0, -1],
  [1, 19, -1],
  [1, 13, -1],
  [3, 0, -1],
  [0, 12, -1],
  [1, 13, -1],
  [3, 2, -1],
];

let A = [
  [0, 1, -1],
  [1, 2, -1],
  [2, 3, 1],
  [0, 4, -1],
  [3, 1, -1],
  [3, 2, -1],
];
let A2 = [
  [3, 1, -1],
  [2, 12, 0],
  [3, 0, -1],
  [2, 11, 0],
  [0, 15, -1],
  [2, 19, 0],
  [2, 4, 2],
  [1, 1, -1],
  [3, 4, -1],
  [3, 1, -1],
  [1, 4, -1],
  [3, 2, -1],
  [0, 12, -1],
  [0, 7, -1],
  [0, 17, -1],
  [2, 9, 6],
  [0, 6, -1],
  [3, 0, -1],
  [1, 10, -1],
  [3, 5, -1],
  [2, 19, 3],
  [1, 19, -1],
  [0, 12, -1],
  [1, 2, -1],
  [2, 7, 11],
  [3, 9, -1],
  [3, 8, -1],
  [2, 8, 3],
  [0, 7, -1],
  [2, 13, 8],
  [3, 9, -1],
  [1, 5, -1],
  [2, 7, 6],
  [2, 11, 0],
  [3, 9, -1],
  [0, 3, -1],
  [0, 1, -1],
  [0, 1, -1],
  [2, 3, 11],
  [0, 4, -1],
  [2, 6, 19],
];

let A3 = [
  [3, 1, -1],
  [2, 12, 0],
  [3, 0, -1],
  [2, 11, 0],
  [0, 15, -1],
  [2, 19, 0],
  [2, 4, 2],
  [1, 1, -1],
  [3, 4, -1],
  [3, 1, -1],
  [1, 4, -1],
  [3, 2, -1],
  [0, 12, -1],
  [0, 7, -1],
  [0, 17, -1],
  [2, 9, 6],
  [0, 6, -1],
  [3, 0, -1],
  [1, 10, -1],
  [3, 5, -1],
  [2, 19, 3],
  [1, 19, -1],
  [0, 12, -1],
  [1, 2, -1],
  [2, 7, 11],
  [3, 9, -1],
  [3, 8, -1],
  [2, 8, 3],
  [0, 7, -1],
  [2, 13, 8],
  [3, 9, -1],
  [1, 5, -1],
  [2, 7, 6],
  [2, 11, 0],
  [3, 9, -1],
  [0, 3, -1],
  [0, 1, -1],
  [0, 1, -1],
  [2, 3, 11],
  [0, 4, -1],
  [2, 6, 19],
];
function main(A) {
  const linkList = new LinkedList();
  for (let subArr of A) {
    let [operationType, value, Index] = subArr;
    switch (operationType) {
      case 0: {
        linkList.unShiftNode(new Node(value));
        break;
      }

      case 1: {
        linkList.appendNode(new Node(value));
        break;
      }
      case 2: {
        linkList.insertNodeAtIndex(new Node(value), Index);
        break;
      }

      case 3: {
        linkList.deletNodeAtIndex(value);
        break;
      }
    }
  }

  return linkList.getHead();
}

function printList(head) {
  let result = [];
  while (head !== null) {
    result.push(head.value);
    head = head.next;
  }
  return result.join("->") + "->NULL";
}

console.log(printList(main(A3)));
