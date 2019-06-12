/*
Given an unordered list of flights taken by someone, each represented as 
(origin, destination) pairs, and a starting airport, compute the person's 
itinerary. If no such itinerary exists, return null. If there are multiple
 possible itineraries, return the lexicographically smallest one. All flights 
 must be used in the itinerary.

For example, given the list of flights 
[('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')]
 and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', 
you should return null.

Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and 
starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C'] 
even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. 
However, the first one is lexicographically smaller.
*/

const flights = (flights, destination) => {
    if(flights === null || flights.length === 0 || destination === null) {
        console.log("NO")
    }
    let flightDict = {}
    for(let i = 0; i < flights.length; i++) {

        if (flightDict[flights[i][0]]) {
            flightDict[flights[i][0]].push(flights[i][1]);
        } else {
            flightDict[flights[i][0]] = [];
            flightDict[flights[i][0]].push(flights[i][1]);
        }
    }

    for(let flight in flightDict) {
        flightDict[flight].sort(function(a,b) {return a.localeCompare(b) * -1});
    }

    let result = [];
    result.push(destination);
    while(flightDict[destination].length > 0) {
        destination = flightDict[destination].pop();
        result.push(destination);
    }
    
    console.log(result);
}

flights([['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A']], 'A');