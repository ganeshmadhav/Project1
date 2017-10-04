package problems;

public class Strstr {
	 public int strStr(String haystack, String needle) {
	        int l = haystack.length();
	        int k=0, g=-1;
	        if(haystack.equals(needle)){
	            return 0;
	        }
	        if(needle.length()>haystack.length()){
	            return -1;
	        }
	        for(int i=0;i<l;i++){
	            if(needle.length()<1){
	                return 0;
	            }
	            char q= haystack.charAt(i);
	            char w = needle.charAt(k);
	            if(haystack.charAt(i)==needle.charAt(k)){
	                k++;
	                if(k==needle.length()){
	                    g=i-k+1;
	                    break;
	                }
	            }
	            else {
	            	if(k!=0){
	                    i = i-k+1;
	                }
	                k=0;
	            }
	        }
	        return g;
	    }
	 public static void main(String args[]){
		 Strstr ob = new Strstr();
		 int p = ob.strStr("mississippi","pi");
		 System.out.print(p);
	 }
}
