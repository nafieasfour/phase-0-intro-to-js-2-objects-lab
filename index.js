// Write your solution in this file!
let employee = {
    name: "Ali",
    streetAddress : "Abc140"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    let newemployee = {...employee};
    newemployee[key] = value;
    return newemployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value){
    let employeee = {...employee};
    delete employeee[key];
    return employeee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    delete employee[key];
    return employee;
}