// Write your solution in this file!
const employee = {}
function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
   const newList = {...employee };
   newList[name] = streetAddress;
    return newList;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = streetAddress
    return employee;
}
function deleteFromEmployeeByKey(employee, name) {
    var newEmployee = Object.assign({}, employee);
    delete newEmployee[name];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name];
    return employee;
}