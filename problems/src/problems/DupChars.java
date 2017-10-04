package problems;

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class DupChars {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner s = new Scanner(System.in);
        String input = s.nextLine();
        String input2="";
        StringBuilder sb = new StringBuilder(input);
        while(!(input.equals(input2))){
        	if(input2!="")
        	input = input2;
           for(int i=0;i<input.length()-1;i++){
           if(input.charAt(i) == input.charAt(i+1)) {
               sb.deleteCharAt(i);
               sb.deleteCharAt(i);
               input2 = sb.toString();
               break;
           }
        }
           
        }
        if(input != ""){
        	System.out.print(input);
        }
        
        if(input.equals("")){
        	System.out.print("Empty String");
        }
        
        
    }
}