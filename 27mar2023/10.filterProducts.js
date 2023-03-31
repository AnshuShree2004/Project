function filterByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    }
  }
  let products = [  { name: 'Shirt', category: 'Clothing' },
     { name: 'skirt', category: 'Clothing' },  
     { name: 'glasses', category: 'Accessories' },
     { name: 'watches', category: 'Accessories' }
    ];

const filterProductsByCategory = filterByCategory(products);

const clothingProducts = filterProductsByCategory('Clothing');
console.log(clothingProducts); 


