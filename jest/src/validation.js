export const validatePassword = (password) => {
    if (password.length < 8) {
        return false;
    }

    const commonPasswords = [
        'password',
        '12345678',
    ]

    if (commonPasswords.includes(password)) {
        return false;
    }

    const specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!specialCharacters.test(password)) {
        return false;
    }

    return true;
}
