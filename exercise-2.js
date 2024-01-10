db.pizzaOrder.findOne(
  { customer_name: "Zoe" },
  { total_price: 1, customer_name: 1 } // ใช้ projection
);
