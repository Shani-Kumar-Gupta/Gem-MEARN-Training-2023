/*
* In JavaScript, super keyword is used to access the properties and methods of it's parent or extended class.
* In JavaScript, this keyword is used to access the properities and methods of it's current class.
*/

//example

class Welcome {
  constructor(name) {
    this.myName = name;
  }

  getNameSeprator() {
    return '-';
  }
}

class Login extends Welcome {
  constructor(name, index) {
    super(name);
    this.myIndex = index;
  }

  getFullName() {
    return this.myName + super.getNameSeprator() + this.myIndex;
  }
}

const firstUser = new Login('Shani', 1);
console.log(firstUser.getFullName());

const secondUser = new Login('Priyanshu', 2);
console.log(secondUser.getFullName());