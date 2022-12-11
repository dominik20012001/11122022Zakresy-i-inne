const numbers = [0, 23, 48, 175, 2, 34, 11]
 //function number(x) {
//    return x % 2 === 0
// } 
//console.log(numbers.filter(number));
numbers.forEach(number => console.log(number))

//mnoży * 2 każdy element
numbers.forEach(number => console.log(number * 2))

console.log(numbers.includes('0'))
//lub dla wyniku fals
console.log(numbers.includes('0'))

console.log(numbers.indexOf('175'))
//jeśli element nie istnieje zawsze zwróci wartość -1
console.log(numbers.indexOf)


//const i =cars.indexOf('bmw')
//cars.splice(i, 1, 'newBMW')
//const newCars = cars.splice(2,4)
//console.log(newCars)

const letters = ['c', 'd']
letters.unshift =['a', 'b']
letters.push('e','f')
console.log(letters)
console.log(letters.includes('c'))

const cw3 = ['1', '5', '13', '26', '48']
cw3.forEach(cyfra => console.log(cyfra * 5))
function mnożenie2(x) {
    return x * 5
}
const newcw3 =cw3.map(mnożenie2)
console.log(newcw3)

for(const number of newcw3) 
    if (newcw3 % 2 == 0){
        console.log(`liczba parzysta ${number}`)
    }  
    else {
        console.log(`liczba nieparzysta ${number}`)   
            
    }
const cw4 = ['red']
console.log(cw4)
cw4.unshift('blue')
cw4.push('green')
console.log(cw4)

for (let i = 0; i < cw4. length; i++)   {
    console.log(`Mój ulubiony kolor to:
    ${cw4[i].charAt(0).toLocaleUpperCase()+ cw4 [i].slice(1)}`)
}

console.log(`${cw4[0].toLocaleUpperCase()}`)//N

console.log(`${cw4[0].slice(1)}`)

function test () {
    console.log ('zawartość funkcji')
}
test()

const helloWorld = function () {
    console.log ('Hello!')
}
helloWorld()

function add (Zium) {
    console.log (`Podany parametr funkcji to: ${Zium}`);
}
add('Boom')

function add(name, fav) {
    console.log(` ${name}  ${fav}`)
}
add(`Polska`, `Górą`)

const image = document.querySelector('h1')

image.addEventListener('click', function() {alert('image')}) 
//console.log('Te programisty we mie klikają')

const arrowFunction = () => {
    //tu jest zawartość funkcji
}

const banana = (name) => {
    console.log(`Je${name}`)
}
banana('Górą')

const hello = (name = 'ziomal') => console.log(`Cześć ${name}, jak się nazywasz?`)
hello('Janusz')