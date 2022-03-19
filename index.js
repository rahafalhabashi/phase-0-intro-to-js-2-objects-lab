const employee = {
    name: "Rahaf Alhabashi",
    streetAddress: {
        street: "736 Bluelake Rd",
        City: "College Park",
        state: "Maryland",
    }
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

const newName = updateEmployeeWithKeyAndValue(employee, "name", "Renad Alhabashi");

newName.name;
employee.name;

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj;
}

const permChangeCity = destructivelyUpdateEmployeeWithKeyAndValue(employee, "city", "Lanham");

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj}
    delete newObj[key];
    return newObj;
}

const deletedState = destructivelyUpdateEmployeeWithKeyAndValue(employee, "state");

function destructivelyDeleteFromEmployeeByKey(obj,key) {
    delete obj[key];
    return obj;
}

const destrDeletedState = destructivelyDeleteFromEmployeeByKey(employee, "state");
