interface Address {
  city: string,
  street: string,
  postalCode: string
}

interface Companies {
  id: number,
  name: string,
  description: string,
  location: Address
}

enum Role{
  STAFF= "staff",
  STUDENT= "student",
  MANAGER= "manager",
  ADMIN="admin"

}

enum Gender { Male= "male", Female="female"
}

interface NewObj{
  id: number,
  name: string,
  surname: string,
  age: number,
  dateOfBirth: string
  address: Address
role: Role,
username: string,
profilePhotoUrl: string,
companies: Companies[]
gender: Gender


}


class User  implements NewObj{
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Address;
role: Role;
username: string;
profilePhotoUrl: string;
companies: Companies[];
gender: Gender;



constructor(name: string, surname: string) {
  this.name = name;
  this.surname= surname
}

 fullname(): void {
  console.log(this.name + " "  + this.surname) 
}

}



