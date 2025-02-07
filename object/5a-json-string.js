const jsObj = {
    id: 1, 
    hobbies: [ {id:1, title: 'gym'}, {id:2, title: 'music'} ]
}

const jsonString = JSON.stringify(jsObj) // convert object to json string
console.log(jsonString)

//Deserialization
const jsObj2 = JSON.parse(jsonString) // convert json string to object