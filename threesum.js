
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.


function threeSum(nums) {
    var len = nums.length,
        temp,
        i,j,k;
        sum = 0,
        arr=[];
    for(i=0; i<len; i++){
        for(j=i+1; j<len; j++){
            for(k=j+1;k <len;k++){
             if(sum === nums[i]+nums[j]+nums[k]){
                 console.log("coming")
                 arr.push([nums[i],nums[j],nums[k]]);
                }
            }
        }
       
    }
     return arr;
};

console.log(threeSum([-1,0,1,2,-1,-4]));