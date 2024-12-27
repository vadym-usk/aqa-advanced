const car1 = {
    brand: "Brand1",
    model: "Model1",
    year: 2023
};

const car2 = {
    brand: "Brand2",
    model: "Model2",
    owner: 2024
};

const car3 = { ...car1, ...car2 };

console.log(car3);