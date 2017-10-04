package problems;

public class LinkedListRev {

    static Node head;
 
    static class Node {
 
        int data;
        Node next;
 
        Node(int d) {
            data = d;
            next = null;
        }
    }
 
    /* Function to reverse the linked list */
    Node reverse(Node node, int k) {
    	int i = 0;
    	if(node == null){
    		return null;
    	}
    	Node prev = null;
        Node current = node;
        Node next = null;
        Node cur = current;
        while (i != k && current != null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            i++;
        }
        if(next != null){
        	cur.next = reverse(next, k);
        }
        return prev;
    }
 
    // prints content of double linked list
    void printList(Node node) {
        while (node != null) {
            System.out.print(node.data + " ");
            node = node.next;
        }
    }
 
    public static void main(String[] args) {
        LinkedListRev list = new LinkedListRev();
        list.head = new Node(1);
        list.head.next = new Node(2);
        list.head.next.next = new Node(2);
        list.head.next.next.next = new Node(4);
        list.head.next.next.next.next = new Node(5);
        list.head.next.next.next.next.next = new Node(6);
        list.head.next.next.next.next.next.next = new Node(7);
        list.head.next.next.next.next.next.next.next = new Node(8);
        System.out.println("Given Linked list");
        list.printList(head);
        head = list.reverse(head, 4);
        System.out.println("");
        System.out.println("Reversed linked list ");
        list.printList(head);
    }
}
