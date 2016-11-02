package problems;
import java.util.Iterator;
import java.util.LinkedList;

public class DfsTraversal {

	int V;
	LinkedList<Integer> adj[];
	
	DfsTraversal(int v){
		V = v;
		adj = new LinkedList[V];
		for(int i=0;i<V; i++){
			adj[i] = new LinkedList();
		}
	}
	
	void addEdge(int v, int w){
		adj[v].add(w);
	}
	
	void DFSRecurse(int v, boolean[] visited){
	visited[v] = true;	
	System.out.println(v+" ");
	
	//Iterate over each adjacency list
	Iterator<Integer> i = adj[v].listIterator();
	while(i.hasNext()){
		int n = i.next();
		if(!visited[n])
		DFSRecurse(n, visited);
	}
	
	}
	
	// The function to do DFS traversal. It uses recursive DFSRecurse()
	void DFS(int v){
		boolean visited[] = new boolean[V];
		
		DFSRecurse(v, visited);
	}
	public static void main(String args[]){
		DfsTraversal g= new DfsTraversal(4);
		
		g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);
		
        g.DFS(2);
		
}
}
