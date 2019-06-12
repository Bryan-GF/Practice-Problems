/*
The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

For example, given the set [1, 2, 3], it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

You may also use a list or array to represent a set.
*/

const powerSet = (arr) => {
    let final = [[]];
    for(let i = 0; i <= arr.length; i++) {
        final.push(arr[i]);
        let arrNew = [];    
        for(let j = i; j <= arr.length; j++) {
            arrNew.push(arr[j]);
        }
        final.push(arrNew);
    }
    console.log(final);
}
