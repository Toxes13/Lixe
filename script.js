
function makeTransaction (quantity, pricePerDroid) {
    const total = `"You ordered ${quantity} droids worth ${pricePerDroid} credits!"`;
    console.log(total);
    return total;
};

const order = makeTransaction(5, 3000);
const order2 = makeTransaction(3, 1000);
const order3 = makeTransaction(10, 5000);