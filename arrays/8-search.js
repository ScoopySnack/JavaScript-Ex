const cities = ['Athens', 'London', 'New York']

console.log("Position of Athens: " + cities.indexOf('Athens')) // 0

if (cities.includes('Athens')) {
  console.log('Athens is in the array')
}else{
  console.log('Athens is not in the array')
}