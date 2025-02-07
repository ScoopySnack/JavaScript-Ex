const obj = {
    id: 1,
    firstname: "Alice",   
}

//Add a new property


//Modify the object
obj.lastname = "W."
console.log(obj) // { id: 1, firstname: 'Alice', lastname: 'W.' }

//Immutable - fresh copy
const addToObj = (obj, field, value) => ({...obj, [field]: value}) 

const objCopy = addToObj(obj, "lastname", "W.")
console.log(objCopy) // { id: 1, firstname: 'Alice', lastname: 'W.' }

//Update the object

//Modifies / updates the object
obj.firstname = "Athana"
console.log(obj) // { id: 1, firstname: 'Athana', lastname: 'W.' }

//Immutable - fresh copy
const updateObj = (obj, field, newVal) => ({...obj, [field]: newVal})
const updatedObj = updateObj(obj, "firstname", "Athana")
console.log(updatedObj) // { id: 1, firstname: 'Athana', lastname: 'W.' }

//Delete a property of an object

//Immutable delete
const deleteIdFromObj = (obj, field) => {
    const {[field]: _, ...objToReturn} = obj
    return objToReturn
}

const objFromDelete = deleteIdFromObj(obj, "id")    
console.log(objFromDelete) // { firstname: 'Athana', lastname: 'W.' }
