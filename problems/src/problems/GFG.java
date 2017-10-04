package problems;

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
    public static int min(int a, int b, int c){
        return(Math.min(Math.min(a,b),c));
    }
    public int editDistance(String s1, String s2, int m, int n){
        if(m == 0) return n;
        if(n == 0) return m;
        if(s1.charAt(m-1) == s2.charAt(n-1)) return editDistance(s1, s2, m-1, n-1);
        
        return 1+ min(
            editDistance(s1,s2,m,n-1),
            editDistance(s1,s2,m-1,n),
            editDistance(s1,s2,m-1,n-1)
            );
    }
	public static void main (String[] args) {
		//code
		Scanner s = new Scanner(System.in);
		int tests = s.nextInt();
		GFG obj = new GFG();
		while(tests>0){
		    --tests;
		    int m = s.nextInt();
		    int n = s.nextInt();
		    String s1 = s.nextLine();
		    String s2 = s.nextLine();
		    int o = obj.editDistance(s1,s2,m,n);
		    System.out.println(o);
		}
	}
}