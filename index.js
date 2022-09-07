const employee = {name: "Sam", streetAddress: "12 Courtney Street"}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...obj, [key]: value}
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = {...obj}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}
