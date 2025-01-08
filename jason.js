// converting JSON object to a string
let employee ={
    firstName: "Libra",
    lastName: "Baino",
    birthdate: new Date(),
    numYearsEmployment: 3,
    department: "ICT",
    title: "juniour developer",
    isActive: true,
    salary: 1000000,
}
let jasonString = JSON.stringify(employee);
console.log(jasonString)

let jasonstring1 =JSON.stringify(employee, null, 2);
console.log(jasonstring1)