/*
Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

For example, given [6, 1,1,1, 3, 3, 10, 3, 6, 6, 11,12, 12, 11, 12, 11], return 1. Given [13, 19, 13, 13], return 19.

Do this in O(N) time and O(1) space.
*/
const appearOnce = (arr) => {
    let seenCount = 0;
    let position = 0;
    let currNum =  0;
    let lastOpenPosition = 0;
    let canChange = true;
    while(position < arr.length) {
        
        if (arr[position] != 0) {
            
            if(seenCount < 1) {
                seenCount++;
                currNum = arr[position];
                arr[position] = 0;
            } else if(arr[position] === currNum) {
                seenCount++;       
                arr[position] = 0;
                if(seenCount === 3) {
                    position = lastOpenPosition;
                    seenCount = 0;
                    canChange = true;
                }
            }         
        }     
        if(arr[position] != currNum && canChange && seenCount === 1) {
            lastOpenPosition = position;
            canChange = false;
        }
        position++;    
    }
    console.log(currNum);
    return currNum;
}