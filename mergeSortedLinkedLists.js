/*
Given two sorted linked lists, merge them together in ascending order and return a reference to the merged list

Ex: Given the following lists...

list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null

    NEEDS REFACTORING

*/
"use strict"

class ListNode {
    constructor(data = null){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    addNewNode(value){
        if(!this.head){
            this.head = new ListNode(value)
            return
        }
        let currentNode = this.head
        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = new ListNode(value)
        return
    }

    getCurrentNodeValue(){
        if(!this.head){
            return null
        }
        return this.head.data
    }

    next(){
        if(this.head){
            this.head = this.head.next
        }
    }
}

function mergeSortedLinkedLists(firstList, secondList){
    const mergedList = new LinkedList()

    while(firstList.getCurrentNodeValue() || secondList.getCurrentNodeValue()){
        if(!firstList.getCurrentNodeValue() && secondList.getCurrentNodeValue()){
            mergedList.addNewNode(secondList.getCurrentNodeValue())
            secondList.next()
        }
        if(!secondList.getCurrentNodeValue() && firstList.getCurrentNodeValue()){
            mergedList.addNewNode(firstList.getCurrentNodeValue())
            firstList.next()
        }
        if(!secondList.getCurrentNodeValue() && !firstList.getCurrentNodeValue()){
            return mergedList
        }
        if((firstList.getCurrentNodeValue() && secondList.getCurrentNodeValue()) && firstList.getCurrentNodeValue() <= secondList.getCurrentNodeValue()){
            mergedList.addNewNode(firstList.getCurrentNodeValue())
            firstList.next()
        } else {
            mergedList.addNewNode(secondList.getCurrentNodeValue())
            secondList.next()
        }
    }

    return mergedList
    
}

function main(){
    const firstList = new LinkedList()
    const secondList = new LinkedList()
    firstList.addNewNode(4)
    firstList.addNewNode(4)
    secondList.addNewNode(1)
    secondList.addNewNode(5)
    secondList.addNewNode(6)
    const mergedList = mergeSortedLinkedLists(firstList, secondList)
}

main()
