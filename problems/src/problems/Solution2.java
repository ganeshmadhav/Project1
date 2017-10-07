package problems;

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution2 {
    public static void main(String args[] ) throws Exception {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    	   Scanner s = new Scanner(System.in);
           while(s.hasNext()){
               String  inp = s.nextLine();      
           inp.replaceAll("\\s","");
           
           String data="";
           String command="";
           for(int i=0;i<inp.length();i++){
               if(inp.charAt(i) == '/'){
                   data = inp.substring(0,i);
                   if(i+1 != inp.length()){
                     command = inp.substring(i+1, inp.length());  
                   }
                   
               }
           }
               boolean isS= false;
               boolean checkfirst= false;
               int f=1;
               boolean checksecond = false;
           for(int i=0;i<command.length();i++){
               
               if(command.charAt(i) == 'R'){ 
                   StringBuilder sb = new StringBuilder(data);
                  sb.reverse();
                  data=sb.toString();
                   for(int j=0;j<data.length();j++)
                   { 
                       StringBuilder sc = new StringBuilder(data);
                       if(data.charAt(j) == '('){
                       sc.setCharAt(j,')');
                           data = sc.toString();
                           continue;
                   }
                    if(data.charAt(j) == ')'){
                       sc.setCharAt(j,'(');
                         data = sc.toString();
                   }
                   }
               }
               if(command.charAt(i) == 'S'){
                   if(isS == false){
                       isS = true;
                       StringBuilder ss = new StringBuilder(data);
                       for(int j=0;j<data.length();j++){
                           if(data.charAt(j) == '(' && checkfirst == false && j==0){
                               ss.deleteCharAt(j);
                               data = ss.toString();
                               f--;
                           }
                           if(data.charAt(j) == ')' && checkfirst == false && f==0){
                                ss.deleteCharAt(j);
                               checkfirst = true;
                               data = ss.toString();
                           }
                           if(data.charAt(j) == '(' && checkfirst == true && f==0){
                        	   checksecond=true;
                               f++;
                               continue;
                           }
                           if(data.charAt(j) == '(' && checkfirst == true && f>0 && checksecond){
                               ss.deleteCharAt(j);
                               data = ss.toString();
                               f++;
                           }
                           if(data.charAt(j) == ')' && checkfirst == true && f==1 && checksecond){
                               
                              f--;
                             continue;
                          }
                           if(data.charAt(j) == ')' && checkfirst == true && f>0 && checksecond){
                                ss.deleteCharAt(j);
                               f--;
                               data = ss.toString();
                           }
                       } 
                   } else {
                      continue;
                   } 
                   
               }
               
           }
           data = data.trim();
           System.out.print(data);
               System.out.println();
           }
           
    }
}
