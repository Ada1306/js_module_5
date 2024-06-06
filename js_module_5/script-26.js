function store(itemName, pricePerKg, quantity) {
    // Обчислення загальної вартості
    const totalCost = pricePerKg * quantity;
    // Повернення назви товару та загальної вартості
    return `Назва товару: ${itemName}, Вартість: ${totalCost.toFixed(2)} грн`;
}

// Перевірка на варіантах
const result1 = store("banana", 30, 4.5);
const result2 = store("cherry", 58, 1.3);
const result3 = store("orange", 89, 3.4);

console.log(result1); // Назва товару: banana, Вартість: 135.00 грн
console.log(result2); // Назва товару: cherry, Вартість: 75.40 грн
console.log(result3); // Назва товару: orange, Вартість: 302.60 грн
