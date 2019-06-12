/*
You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.
*/

class OrderList {

    constructor(orderList = []) {    
        this.orderList = orderList;
    }

    record(order_id) {
        this.orderList.push(order_id);
    }

    get_last(i) {
        return this.orderList[i];
    }

}

const testing = () => {
    let test = new OrderList();
    test.record(2);
    console.log(test.orderList);
    console.log(test.get_last(0));
}

testing();