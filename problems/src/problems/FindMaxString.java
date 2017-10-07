package problems;
import java.util.Arrays;
import java.util.Collections;


public class FindMaxString {
	
	

	int myCompare(String X, String Y)
	{
	    // first append Y at the end of X
	    String XY = X.concat(Y);
	   
	 
	    // then append X at the end of Y
	    String YX = Y.concat(X);
	 
	    // Now see which of the two formed numbers is greater
	    return XY.compareTo(YX) > 0 ? 1: 0;
	}
	
	/*int[] findmax(int arr[]){
		int max=0;
		int out[] = new int [arr.length];
		for(int i =0;i< arr.length;++i){
			if(max<arr[i])
				max= arr[i];
		}
		out[0]=  max;
		
		return out;
	}*/
	void printLargest(String arr[])
	{
	    // Sort the numbers using library sort funtion. The function uses
	    // our comparison function myCompare() to compare two strings.
	    // See http://www.cplusplus.com/reference/algorithm/sort/ for details
		Arrays.sort(arr);
		
		for (int i=arr.length-1; i >=0 ; i-- )
			System.out.print(arr[i]);

			
	}
	
	public static void main(String args[]){
		String arr[] = {"32","9","12"};
		FindMaxString fx = new FindMaxString();
		fx.printLargest(arr);
		
	}
}
