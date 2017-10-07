package problems;
import java.io.*;
import java.util.*;

public class Euler {
	    public static void main(String[] args) {
	        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
	        Scanner s = new Scanner(System.in);
	        int m = s.nextInt();
	        int t = s.nextInt();

	        int val;
	        int highest;
	        boolean flag = false;
	        int g;
	        int a[] = new int[10];
	        for(int i=0; i<t ;i++){
	            val = s.nextInt();
	            highest=0;
	            for(int j=0; j<val;j++){
	                highest+=(int)Math.pow(10, j)*9;
	            }
	            int number =0;
	            
	            
	            for(int k =0; k< highest; k++){
	                flag = false;
	            for(int u=0;u<10;u++){
	                a[u]=0;
	            }
	            while(k>0){
	                g=k%10;
	                a[g]++;
	                k/=10;
	            }
	                int o =0;
	                while(o<10){
	                    if(a[o] > m){
	                    flag =true;
	                        break;
	                }
	                    o++;
	                }
	               
	                if(flag == false){
	                    number++;
	                }
	            }
	            System.out.println(number);
	            
	        }
	    }
	}