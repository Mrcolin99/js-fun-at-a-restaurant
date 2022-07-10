function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients(food, ingredients) {
  if (ingredients.includes(food)) {
    return
  } else {ingredients.push(food)}

  //make this function add a string to an array
  //if an ingredient has already been added then dont add it again
}

function formatPrice(initialPrice) {
  return '$' + initialPrice
}

function decreasePrice(ogPrice) {
  return (ogPrice * 0.9)
}

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
