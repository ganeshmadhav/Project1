package problems;

/* IMPORTANT: Multiple classes and nested static classes are supported */

/*
 * uncomment this if you want to read input.
//imports for BufferedReader
import java.io.BufferedReader;
import java.io.InputStreamReader;
*/
//import for Scanner and other utility  classes
import java.util.*;


class Bubbly {
    public static void main(String args[] ) throws Exception {
        /*
         * Read input from stdin and provide input before running
         * Use either of these methods for input

        //BufferedReader
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String line = br.readLine();
        int N = Integer.parseInt(line);

        //Scanner
        Scanner s = new Scanner(System.in);
        int N = s.nextInt();

        for (int i = 0; i < N; i++) {
            System.out.println("hello world");
        }
        */
        Scanner s = new Scanner(System.in);
        String ip;
        int N = s.nextInt();
        int L,i=0, count =0; char st;
        Boolean flag=true;
        while(N >0){
        	ip = s.next();
    		L= ip.length();
    		i=0;
        	while(i<L-1){
        		if(ip.charAt(i) == ip.charAt(i+1)){
        			i+=2;
        			continue;
        		}else if(ip.charAt(i) == ip.charAt(L-i-1)){
        			i+=1;
        			continue;
        		}else{
        			flag = false;
        			break;
        		}
        	}
        	if (flag == true){
        		count++;
        	}else{
        		flag = true;
        	}
        	N--;
        }
        System.out.println(count);
    }
}
