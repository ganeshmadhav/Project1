package problems;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.*;

public class WoMaps {
	public static void main(String args[]){
		Scanner s = new Scanner(System.in);
		Scanner er = new Scanner(System.in);
		Scanner t = new Scanner(System.in);
		Scanner rr = new Scanner(System.in);

		int option=0;
		String name="";
		int pnumber;
		Map<String, Integer> map = new TreeMap<String, Integer>();
		while(true){
			System.out.println("Select 1. to insert and 2. to view collection 3. to retrieve phone number");
			 if (er.hasNext()) {
				 if (er.hasNextInt()) {
					 option =Integer.parseInt(er.next());
				 }
				 
			 }
			
			switch(option) {
			   case 1:
				   System.out.println("Type a name ");
				   if (s.hasNext()) {
				   if (s.hasNextLine()) {
					   name = s.nextLine();
					   
				   } else {
					   s.next();
					   
				   }
				   }
				   System.out.println("Type a number ");
				   if (rr.hasNext()) {
				   if(rr.hasNextInt()){
					   pnumber = rr.nextInt();
					   map.put(name, pnumber);
				   } else {
					   s.next();
				   }
				   }
				  
				   
			      break; // optional
			   
			   case 2:
			      System.out.println("The directory");
			      for(Map.Entry<String, Integer> set: map.entrySet()){
			    	  name = set.getKey();
			    	  pnumber = set.getValue();
			    	  System.out.println("name:"+ name+"\t"+"phone number:"+pnumber);
			      }
			      break; // optional
			   case 3:
				   System.out.println("Enter the name");
				   if (t.hasNextLine()) {
					   name = t.nextLine();
					   pnumber = map.get(name);
					   System.out.println("name:"+ name+"\t"+"phone number:"+pnumber);
				   }
				   
				   break;
			   // You can have any number of case statements.
			   default : // Optional
			      // Statements
			}
		}
		
	}
}
