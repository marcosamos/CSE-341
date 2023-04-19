const awesomeFunction = (req, rest, next) => {
    rest.json('Marcos Uc');
}


const returnAnotherPerson = (req, rest, next) => {
    rest.json('Super Awesome person');
}

module.exports = {awesomeFunction, returnAnotherPerson}