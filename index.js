var recipes = {crepes : 'eggs'}
function updateObjectWithKeyAndValue(recipes, key, value) {
  var newRecipe = Object.assign({}, recipes, {[key]: value})
  return newRecipe
}
