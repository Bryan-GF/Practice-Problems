/*
A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.
*/

const constructHomes = (numHouses, numColors, matrix) => {
    let finalList = [];

    const possibles = (numHouses, numColors, newArr, totalCost, count) => {
        if(newArr.length === numHouses) {
            finalList.push([newArr, totalCost]);
            return;
        } 
        let newTotal;
        if(newArr.length < 1) {
            for(let i = 0; i < numColors; i++) {
                newTotal = totalCost + matrix[newArr.length][i];
                possibles(numHouses, numColors, [...newArr, i], newTotal, count+=1);
            }
            
        } else {
            for(let i = 0; i < numColors; i++) {
                if(i != newArr[newArr.length - 1]) {
                    newTotal = totalCost + matrix[newArr.length][i];
                    possibles(numHouses, numColors, [...newArr, i], newTotal, count+=1);
                }
                

            }
        }
        
        
    }
    
    possibles(numHouses, numColors, [], 0, 0);

    let bestArr = []
    let bestSum = Infinity;
    for(let i = 0; i < finalList.length; i++) {
       if(finalList[i][1] < bestSum) {
           bestSum = finalList[i][1];
           bestArr = finalList[i][0];
       }
    }
    console.log(bestArr, bestSum);
}

constructHomes(5, 3, [[4, 0, 3], [8,3,8],[4,5,0],[3,4,4],[8,8,0]]);


