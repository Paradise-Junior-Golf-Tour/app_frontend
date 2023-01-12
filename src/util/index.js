export const reduceObjects = function (array, property) {
  const total = array.reduce((accumulator, object) => {
    return accumulator + object[property]
  }, 0)

  return total
}
