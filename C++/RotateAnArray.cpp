#include <iostream>

using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* rotateLinkedList(Node* head, int k) {
    if (!head || !head->next || k == 0) {
        return head;
    }

    int length = 1;
    Node* tail = head;
    while (tail->next) {
        tail = tail->next;
        length++;
    }

    k = k % length; // Handle k > length
    if (k == 0) {
        return head;
    }

    k = length - k; // Find the kth node from the beginning (where to break)
    Node* current = head;
    for (int i = 1; i < k; i++) {
        current = current->next;
    }

    Node* newHead = current->next;
    current->next = nullptr;
    tail->next = head;

    return newHead;
}

void printLinkedList(Node* head) {
    Node* current = head;
    while (current) {
        cout << current->data << " ";
        current = current->next;
    }
    cout << endl;
}

void deleteLinkedList(Node* head) {
    Node* current = head;
    while (current) {
        Node* next = current->next;
        delete current;
        current = next;
    }
}

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    head->next->next->next->next = new Node(5);

    cout << "Original list: ";
    printLinkedList(head);

    int k = 2;
    head = rotateLinkedList(head, k);

    cout << "Rotated list (k=" << k << "): ";
    printLinkedList(head);

    k = 3;
    head = rotateLinkedList(head, k);

    cout << "Rotated list (k=" << k << "): ";
    printLinkedList(head);

    k = 7;
    head = rotateLinkedList(head, k);

    cout << "Rotated list (k=" << k << "): ";
    printLinkedList(head);

    k = 5;
    head = rotateLinkedList(head, k);

    cout << "Rotated list (k=" << k << "): ";
    printLinkedList(head);

    deleteLinkedList(head); // Clean up memory

    return 0;
}