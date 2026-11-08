type AllowedValue = string | number | boolean;

function validateUnionType(
    value: any,
    allowedTypes: string[]
): boolean {
    return allowedTypes.includes(typeof value);
}

const allowedTypes = ["string", "number", "boolean"];

// Test different values
console.log(validateUnionType("Barry", allowedTypes)); // true
console.log(validateUnionType(54, allowedTypes));      // true
console.log(validateUnionType(true, allowedTypes));    // true
console.log(validateUnionType({}, allowedTypes));      // false
console.log(validateUnionType(undefined, allowedTypes)); // false