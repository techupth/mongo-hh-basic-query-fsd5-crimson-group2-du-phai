db.pizzaOrders.find(
  {
    customer_name: "Zoe",
  },
  { customer_name: 1, total_price: 1 }
);
