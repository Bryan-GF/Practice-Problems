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
    let flightDict = {}
    for(let i = 0; i < flights.length; i++) {

        if (flightDict[flights[i][0]]) {
            flightDict[flights[i][0]].add(flights[i][1]);
        } else {
            flightDict[flights[i][0]] = new Set();
            flightDict[flights[i][0]].add(flights[i][1]);
        }
    }

    flights = [];
    if(!flightDict[destination]) {
        console.log('NOPE');
        return;
    } else {
        flights.push(destination);
    }


    while(flightDict[destination] && flightDict[destination].size > 0) {
        let smallestLex = Infinity;
        for(let v of flightDict[destination]) {
            if(smallestLex === Infinity) {
                smallestLex = v;
            } else if (v.localeCompare(smallestLex) < 0) {
                smallestLex = v;
            }
        }
        flightDict[destination].delete(smallestLex);
        destination = smallestLex;    
        flights.push(destination);
    }
    console.log(flights);
}

flights([['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A']], 'A');