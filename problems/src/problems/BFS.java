package problems;

import java.util.Iterator;
import java.util.LinkedList;

public class BFS {
	
	int V;
	LinkedList<Integer> adj[];
	
	BFS(int v){
		V=v;
		adj = new LinkedList[V];
		for(int i=0; i<V; i++){
		adj[i] = new LinkedList<Integer>();	
		}
	}
	
	void addEdge(int v, int w){
		adj[v].add(w);
	}
	
	void showBFS(int v){
		boolean visited[] = new boolean[V];
		
		LinkedList<Integer> queue = new LinkedList<Integer>();
		
		visited[v]= true;
		queue.add(v);
		
		while(queue.size() != 0){
			int s = queue.poll();
			System.out.println(s+ " ");
			
			Iterator<Integer> it = adj[s].listIterator();
			while(it.hasNext()){
				int ne = it.next();
				if(!visited[ne]){
					visited[ne]= true;
					queue.add(ne);
				}
					
			}
			
		}
		
		//computeBFS(v,visited);
	}
	
	public static void main(String args[]){
		BFS g= new BFS(4);
		
		g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);
 
        g.showBFS(2);
		
	}
}
