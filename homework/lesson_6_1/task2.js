// Function Expression
const ageVerification = function(...personAges) {
    // Additional check is array empty or not
    // if (personAges.length === 0) {
    //     console.log('Current array is empty!');
    //     return;
    // }
    
    // Additional check if array elements >= 0
    // if (age => age <= 0) {
    //     console.log('Person age should be more than 0');
    //     return;
    // }

    for (let age of personAges) {
        if (age >= 18) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

ageVerification(25, 15);