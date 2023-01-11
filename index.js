const employee = {
    name: "Emily",
    streetAddress: "The Pines",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
     [key]: value,   
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value;
   return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee;
}
    //first we clone the object
    //then we delete the key
    //return the new object

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    let destroyedEmployee = employee
    delete destroyedEmployee[key]
    return destroyedEmployee;
}   