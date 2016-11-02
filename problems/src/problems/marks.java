package problems;
import java.util.Scanner;
public class marks {
public static void main(String args[]){
	int N,X,count=0;
    Scanner s = new Scanner(System.in);
    N = s.nextInt();
    X= s.nextInt();
    int[] a= new int[100];
    boolean m = true;
    for(int i=0;i<N;i++){
    	a[i]=s.nextInt();;
    	if(a[i]<X || m == true){
    		if(a[i]>X){
    			m=false;
    		}
    		count++;
    	}else{
			break;
		}
    }
    System.out.println(count);
}
}


