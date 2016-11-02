package problems;

import java.util.Scanner;

public class problemA {
public static void main(String args[]){
	Scanner s = new Scanner(System.in);
	String a="",l = s.nextLine();
	for(int i = l.length()-1; i >= 0 ; i--){
		//System.out.println(l.charAt(i));
		a += l.charAt(i);
	}
	System.out.println(a);
	}
}

