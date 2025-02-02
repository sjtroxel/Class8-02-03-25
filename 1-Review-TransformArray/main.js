// **Transform Array

function transformArray (nums) {
        nums.unshift(5);
        nums.pop();
        const plus1Array = [];
        for (let i = 0; i < nums.length; i++) {
                plus1Array.push(nums[i] + 1);
        }
        return plus1Array;
}

console.log(transformArray([10, 20, 30]));