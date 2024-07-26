export const validatePassword = (password) => {
    if (password.length <= 7) {
        // 1
        return false
    }
    const common = [
        "12345678",
        "password",
        "admin123",
        "abc12345",
        "secretsz",
    ]
    for (let item of common) {
        if (password === item) {
            // return false because it's a commonly used password
            // 2
            return false
        }
    }
    const specialCharacters = ['!', '@', '#']
    for (let specialCharacter of specialCharacters) {
        const index = password.indexOf(specialCharacter)
        // did we find a special character
        if (index >= 0) {
            // 3
            return true
        }
    }
    // 4
    return false;
}

console.assert(validatePassword("a1b2c3d4e5!") === true, "this is a valid password")
console.assert(validatePassword("a") === false, "this is too short")
console.assert(validatePassword("anything") === false, "theres no special character")
console.assert(validatePassword("12345678") === false, "too common")

// What the code should do
// 1. check that the password is >7 characters in length
// 2. not be a "commonly used" password
// 3. make sure it has at least one special character
