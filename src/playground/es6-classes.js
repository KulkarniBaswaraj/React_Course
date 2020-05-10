class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Treveler extends Person {
    constructor(name, age, location) {
        super(name,age);
        this.location = location
    }

    hasLocation() {
        return !!this.location;
    }

    getDetails() {
        let details = super.getDetails();
        details += ` Their location is ${this.location}`;
        return details;
    }
}

let baswa = new Treveler('Baswa', 29, 'Kalaburgi');
console.log(baswa);
console.log(baswa.getDetails());