package problems;
import java.util.Scanner;

class SubstringOfAString
{
   public static void main(String args[])
   {
      String string, sub;
      int i, c, length;
 
      Scanner idn = new Scanner(System.in);
      System.out.println("Enter a string to print it's all substrings");
      string  = idn.nextLine();
 
      length = string.length();   
 
      System.out.println("Substrings of \""+string+"\" are :-");
 
      for( c = 0 ; c < length ; c++ )
      {
         for( i = 1 ; i <= length - c ; i++ )
         {
            sub = string.substring(c, c+i);
            System.out.println(sub);
         }
      }
   }
}