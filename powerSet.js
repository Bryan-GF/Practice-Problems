/*
The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

For example, given the set [1, 2, 3], it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

You may also use a list or array to represent a set.
*/
const powerSet = (arr) => {
    let final = new Set();
    final.add({});
    const checkSet = (arr, position, set) => {
        if(position >= arr.length -1) {
            return;
        }
        set.add(arr[position]);
        final.add(set);
        return checkSet(arr, position++, set);
    }
    checkSet(arr, 0, new Set());
    console.log(arr);
}


powerSet([1,2,3]);