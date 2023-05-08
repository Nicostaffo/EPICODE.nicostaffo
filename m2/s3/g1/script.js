class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location
    }

    static confrontoEta(a, b) {
        if (a.age > b.age) {
            return a.firstName + " é più veecchio di " + b.firstName
        } else {
            return b.lastName + " è più vecchio di " + a.firstName;
        }
    }
}

let x = new User('Ciccio', 'Graziani', 58, 'Cervia');
console.log(x);

let y = new User('Pippo', 'Baudo', 82, 'Milano');

console.log(User.confrontoEta(x, y));


let petName = document.getElementById('petName');
let ownerName = document.getElementById('ownerName');
let speciesType = document.getElementById('speciesType');
let breedType = document.getElementById('breedType');


let newPet = [];



class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    static confrontOwner(c, d) {
        return c.ownerName === d.ownerName
    }

}






const createLi = function () {
    let ul = document.querySelector('ul');
    ul.innerHTML = '';
    newPet.forEach((pet, i) => {
        let newLi = document.createElement('li');
        newLi.innerText = pet.petName + ' ' + pet.ownerName + ' ' + pet.species + ' ' + pet.breed + Pet.confrontOwner(Pet, newPet[i - 1] ? newPet[i - 1] : {})

        ul.appendChild(newLi);
    })
}




let getForm = document.querySelector('form');
getForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let pet = new Pet(
        petName.value,
        ownerName.value,
        speciesType.value,
        breedType.value,
    );
    newPet.push(pet);
    petName.value = '';
    ownerName.value = '';
    speciesType.value = '';
    breedType.value = '';
    console.log(newPet);
    createLi();
})



