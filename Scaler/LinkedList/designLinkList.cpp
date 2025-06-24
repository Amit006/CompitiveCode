#include <iostream>
#include <vector>
using namespace std;

// Node definition
class Node {
public:
    int value;
    Node* next;
    Node(int val) : value(val), next(nullptr) {}
};

class LinkedList {
public:
    Node* head;
    Node* tail;
    int size;

    LinkedList() : head(nullptr), tail(nullptr), size(0) {}

    void unShiftNode(Node* node) {
        node->next = head;
        head = node;
        size++;
        if (tail == nullptr) {
            tail = node;
        }
    }

    void appendNode(Node* node) {
        if (head == nullptr) {
            head = node;
            tail = node;
        } else {
            tail->next = node;
            tail = node;
        }
        size++;
    }

    void insertNodeAtIndex(Node* node, int index) {
        if (index < 0 || index > size) return;
        if (index == 0) {
            unShiftNode(node);
            return;
        } else if (index == size) {
            appendNode(node);
            return;
        } else {
            Node* current = head;
            int count = 0;
            while (current != nullptr && count < index - 1) {
                current = current->next;
                count++;
            }
            if (current != nullptr) {
                node->next = current->next;
                current->next = node;
                size++;
            }
        }
    }

    void deleteNodeAtIndex(int index) {
        if (index < 0 || index >= size) return;
        if (index == 0) {
            Node* temp = head;
            head = head->next;
            delete temp;
            size--;
            if (size == 0) tail = nullptr;
        } else {
            Node* current = head;
            int count = 0;
            while (current != nullptr && count < index - 1) {
                current = current->next;
                count++;
            }
            if (current != nullptr && current->next != nullptr) {
                Node* temp = current->next;
                current->next = current->next->next;
                if (current->next == nullptr) tail = current;
                delete temp;
                size--;
            }
        }
    }

    Node* getHead() {
        return head;
    }
};

// Helper function to print the list
void printList(Node* head) {
    while (head != nullptr) {
        cout << head->value << "->";
        head = head->next;
    }
    cout << "NULL" << endl;
}

// Main function to process operations
Node* mainLinkedList(const vector<vector<int>>& A) {
    LinkedList linkList;
    for (const auto& op : A) {
        int operationType = op[0];
        int value = op[1];
        int index = op[2];
        switch (operationType) {
            case 0:
                linkList.unShiftNode(new Node(value));
                break;
            case 1:
                linkList.appendNode(new Node(value));
                break;
            case 2:
                linkList.insertNodeAtIndex(new Node(value), index);
                break;
            case 3:
                linkList.deleteNodeAtIndex(value);
                break;
        }
    }
    return linkList.getHead();
}

// Example usage
int main() {
    vector<vector<int>> A = {
        {0, 1, -1},
        {1, 2, -1},
        {2, 3, 1},
        {0, 4, -1},
        {3, 1, -1},
        {3, 2, -1}
    };

    Node* head = mainLinkedList(A);
    printList(head); // Output: 4->3->NULL

    return 0;
}