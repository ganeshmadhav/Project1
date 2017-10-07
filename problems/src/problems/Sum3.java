package problems;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Sum3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Solution s = new Solution();
		int[] m = {0,0,0};
		System.out.print(s.threeSum(m));

	}
}

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        return threeSumGen(nums, 0);
    }
    public List<List<Integer>> threeSumGen(int[] nums, int target){
        List<List<Integer>> result = new ArrayList<>();
        if(nums.length < 3) return result;
        Arrays.sort(nums);
        for(int i=0;i<nums.length-2;i++){
            if(i>0 && nums[i] == nums[i-1]) continue;
                int left = i+1;
                int right = nums.length-1;
                while(left<right){
                    int ranSum = nums[left] + nums[right];
                    int chetarget = target - nums[i];
                    if(chetarget == ranSum){
                        ArrayList<Integer> ar = new ArrayList<Integer>();
                        ar.add(nums[i]);
                        ar.add(nums[left]);
                        ar.add(nums[right]);
                        result.add(ar);
                        left++;
                        right--;
                        while(left < nums.length && nums[left] == nums[left-1]) left++;
                        while(right >= 0 && nums[right] == nums[right+1]) right--;
                    } else if(chetarget > ranSum) {
                        left++;
                    } else {
                        right--;
                    }
                }
        }
         return result;
    }
}
