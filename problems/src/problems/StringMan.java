package problems;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;

public class StringMan {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner s = new Scanner(System.in);
        int N= s.nextInt();
        ArrayList<String> arr = new ArrayList<String>();
        for(int i=0;i<N;i++){
            arr.add(s.nextLine());
        } 
        Iterator<String> it = arr.listIterator();
        int T= s.nextInt();
        ArrayList<String> test = new ArrayList<String>();
        for(int i=0;i<T;i++){
            test.add(s.nextLine());
        }
        Iterator<String> ilist = test.listIterator();
        while(ilist.hasNext()){
            int count =0;
            while(it.hasNext()){
                if(ilist.next().equals(it.next())){
                 count++;
                }
            }
            System.out.println(count+"\n");
        }
    }
}