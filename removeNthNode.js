
/*
This question is asked by Facebook. Given a linked list and a value n, remove the nth to last node and return the resulting list.

Ex: Given the following linked lists...

1->2->3->null, n = 1, return 1->2->null
1->2->3->null, n = 2, return 1->3->null
1->2->3->null, n = 3, return 2->3->null
*/
"use strict"

class ListNode {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.count = 0
    }

    addNewNode(value) {
        if(!this.head){
            this.head = new ListNode(value)
            this.count++
            return
        }

        let currentNode = this.head
        while(currentNode.next){
            currentNode = currentNode.next
        }

        currentNode.next = new ListNode(value)
        this.count++
        return
    }

    removeNthNode(nodePosition){
        let currentNode = this.head
        let previousNode = this.head
        for(let i = 0; i < this.count - nodePosition; i++){
            previousNode = currentNode
            currentNode = currentNode.next
        }
        if(currentNode == this.head){
            this.head = currentNode.next
        }

        if(currentNode.next){
            previousNode.next = currentNode.next
        } else {
            previousNode.next = null
        }

    }
}

function main(){
    let list = new LinkedList()
    list.addNewNode(1)
    list.addNewNode(2)
    list.addNewNode(3)
    list.removeNthNode(3)
}

main()
