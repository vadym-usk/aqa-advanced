// Function Expression
const checkOrder = function (available, ordered) {
    // Additional check if 'available' or 'ordered' >=0
    // if (available < 0 || ordered < 0) {
    //     console.log('The data is wrong!');
    //     return;
    // }

    if (available < ordered) {
        console.log('Your order is too large, we don’t have enough goods.');
    } else if (ordered === 0) {
        console.log('Your order is empty');
    } else {
        console.log('Your order is accepted');
    }
}

checkOrder(10, 15);