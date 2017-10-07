package problems;

import java.util.Iterator;
import java.util.LinkedList;

public class BFirst {
	int v;
	LinkedList[] adj;
	
	public BFirst(int V){
		v = V;
		adj = new LinkedList[V];
		for(int i=0; i< V ; ++i){
			adj[i] = new LinkedList();
		}
		
	}
	
	 void addNode(int v, int w){
	adj[v].add(w);	
	}
	 
	 void BFS(int s){
		LinkedList<Integer> que= new LinkedList<Integer>();
	 boolean visited[] = new boolean[v];
	 visited[s] = true;
	 que.add(s);
	 while(que.size() !=0 ){
		 int temp = que.pop();
		 System.out.println(temp);
		Iterator it = adj[temp].listIterator();
		
		while(it.hasNext()){
			int next = (int) it.next();
			if(!visited[next]){
				visited[next] = true;
				que.add(next);
			}
		}
	 }
	 
	 }

	public static void main(String args[]){
		BFirst vf = new BFirst(4);
		 vf.addNode(0, 1);
	        vf.addNode(0, 2);
	        vf.addNode(1, 2);
	        vf.addNode(2, 0);
	        vf.addNode(2, 3);
	        vf.addNode(3, 3);
		vf.BFS(2);
	}
}
