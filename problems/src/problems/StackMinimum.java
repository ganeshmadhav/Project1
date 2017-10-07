package problems;
import java.io.*;
import java.util.Stack;
public class StackMinimum extends Stack<NodewithMin> {
public void push(int value){
	int newMin= Math.min(value, min());
	super.push(new NodewithMin(value, newMin));
}

public int min(){
	if(this.isEmpty()){
		return Integer.MAX_VALUE;
	}
	return peek().min;
}
public static void main(String args[]){
	StackMinimum s = new StackMinimum();
	s.push(23);
	s.push(24);
	s.push(2);
	System.out.println(s.min());
	s.pop();
	System.out.println(s.min());

}
}

class NodewithMin{
	public int value;
	public int min;
	public NodewithMin(int v, int m){
		value = v;
		this.min = m;
	}
}
