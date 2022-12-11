const promo = '20'

switch(promo) {
    case '10':
    console.log ('dzisiaj jest promocja 10%')
    break
case '20%':
    console.log('dzisiaj jest promocja 20')
    break
case '30%':
    console.log('dzisiaj tylko 30%')
    break
default:
    console.log('brak promocji')
}
let xx = 10
if (xx % 2 ==  0) {
    console.log('liczba jest parzysta')
}
else{
    console.log('liczba jest  nie parzysta')
}

let x = 50
if (x > 100) {
    console.log('jest duży'.toUpperCase())
}
else if  (x <=30 ) {
console.log('jest mały'.toUpperCase())
}
else    {
console.log('jest średni'.toUpperCase())
}

//for(let i = 0; < 8; i++) {
// console.log('blah blach blah')
//}
//const drinks =['woda' , 'herbata', 'kawa', 'sok']


const miasta =['Rybnik','Rydułtowy','Racibórz','Radlin'];

for (let nazwamiasta = 0; nazwamiasta < miasta.length; nazwamiasta++ ){
    console.log('To miasto nazywa się ' + miasta[nazwamiasta]);
    }
let z = 0
while(z <= 10){
console.log(z)
z += 2 //x = x += 2
}
const number = [5, 8, 10, 23, 48, 60]
for(const number of numbers) {
    if((number / 5) % 2 == 0 ){
        console.log('Liczba' ${number} 'jest parzysta')
    }
    else {console.log('Liszba' ${number} 'jest nieparzysta')
    }}
    

