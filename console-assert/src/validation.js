export const validatePassword = (password) => {
    if (password.length <= 7 ) {
        return false
    }

    const commonArray = [
        "12345678",
        "password",
        "admin12345",
        "secretsz",
    ]
    for (let item of commonArray) {
        if (password === item) {
            return false
        }
    }
    // the for loop will loop through (test for each special character) 3 time cus there are 3 items in the array
    const specialCharacters = ["!", "@", "#"]
    for (let specialCharacter of specialCharacters) {
        const index = password.indexOf(specialCharacters)
        // if (index !== -1) {
        //     return true
        // }
         if (index >= 0) {
            return true
         }
    }
    return false;

}

console.assert(validatePassword("a1b2c3d4e5!"), "this is a valid password")
console.assert(validatePassword("a") === false, "this is too short")
console.assert(validatePassword("anything") === false, "theres no special character")
console.assert(validatePassword("12345678") === false, "too common")

// What the code should do
// 1. check that the password is >7 characters in length
// 2. not be a "commonly used" password
// 3. make sure it has at least one special character
