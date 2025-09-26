let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(first, last) {
    return `${first}  ${last}`;
}

console.log(fullName(firstName, lastName));

const fullName =function (first, last) {
    return `${first}  ${last}`;
}

console.log(fullName(firstName, lastName));

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

document.querySelector('#fullname').innerHTML = fullName(firstName, lastName);