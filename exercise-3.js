db.pizzaOrder.find({ total_price: { $gt: 1 } }).sort({ total_price: -1 });
