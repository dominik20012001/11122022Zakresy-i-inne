const animal = ['kon','kura','pies','kot','łasica'];
console.log (animal)
animal.unshift('kura')
console.log (animal)
animal.shift()
console.log (animal)

const numbers = [1,2,3,4]
function termos(herbata){
    return herbata * 2
}
const newNumbers = numbers.map(termos)

console.log(numbers)
console.log(newNumbers)

const numbers2 = [7,6,5]
const elements =['woda', 'śnieg', 'lód']

const newList = numbers2.concat(elements)

console.log(newList)

const cristmasThings = ['choinka', 'bombki', 'lampki' , 'prezenty', 'stajenka']


//console.log(...cristmasThings)
console.log(cristmasThings.slice(2,5))

const numbers3 = [3]
const abc = ['a', 'b', 'c']

const both = [...abc, ...numbers3]
console.log(both)

const numbers4 = numbers.splice=(0,4)
console.log(numbers4)

const randomStuf= colors.splice(3)
console.log(randomStuf)

const NewCars= cars.splice(2,4,'test')
console.log(NewCars)
console.log(cars)