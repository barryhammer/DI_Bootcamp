function validateUnionType(value: any, allowedTypes: string[]): boolean {
    return allowedTypes.includes(typeof value);
    // .includes checks whether the type returned by typeof exists in the allowedTypes array.
}

// Define allowed types
const allowedTypes: string[] = ["string", "number", "boolean"];

// Test different values
console.log(validateUnionType("Barry", allowedTypes)); // true
console.log(validateUnionType(54, allowedTypes));      // true
console.log(validateUnionType(true, allowedTypes));    // true
console.log(validateUnionType({}, allowedTypes));      // false
console.log(validateUnionType(undefined, allowedTypes)); // false