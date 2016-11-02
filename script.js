var groceryList = [
  { item: "cheerios",
    price: 3.00
  },

  {
    item: "bread",
    price: 2.00
  },
  {
    item: "fish sticks",
    price: 5.00
  },
  {
  item: "fruit",
  price: 5.00
  }
];

for(i=0; i<groceryList.length; i++){

  total+=groceryList[i].price;
  console.log(groceryList[i].item+ " $" + groceryList[i].price);

}

console.log("Total: $" + total);
