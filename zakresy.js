const name = 'Mars'

const test = () => {
    const name = 'Saturn'
    console.log(`NAME w funkcji - ${name}`);

    const border = () => {
        const name = 'Jowisz'
        console.log(`Name najbardziej zagnieżdżony ${name}`)
    }
    border()
}

test()

console.log(`NAME po za funkcją - ${name}`);