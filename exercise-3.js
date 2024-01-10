db.pizzaOrders.find({}).sort({
  total_price: -1,
});
