package problems;
import java.io.*;

public class Quicksort {
	 int partition(int arg[], int low, int high){
		int pivot = arg[high];
		int i = low-1;
		for(int j=low;j<high; j++){
			if(arg[j]<=pivot){
				i++;
				int temp= arg[j];
				arg[j]=arg[i];
				arg[i]=temp;
			}
		}
		int temp= arg[i+1];
		arg[i+1]=arg[high];
		arg[high]=temp;
		
		
		return (i+1);
	}
	
	 void quicksort(int arg[], int low, int high)
	{
		if(low < high){
			int part= partition(arg,low,high);
			
			quicksort(arg, low, part-1);
			quicksort(arg, part+1, high);
		}
		
		
	}
	void display(int arg[],int n){
		for(int i=0;i<n;i++){
			System.out.print(arg[i]+",");
		}
	}
	public static void main(String args[]){
		int arg[] = {10, 7, 8, 9, 1, 5};
		int n = arg.length;
		Quicksort ob = new Quicksort();
		
		ob.quicksort(arg, 0, n-1);
		ob.display(arg,n);
	}
	
}
