

// test email //
export function isEmail(pass) {
    return /[\.]/.test(pass) && /[\@]/.test(pass) && /[a-z]/i.test(pass);
}

// test password //
export function isLowerWord(pass) {
    return /[a-z]/.test(pass)
}

export function isUpperWord(pass) {
    return /[A-Z]/.test(pass)
}

export function isNumber(pass) {
    return /[1-9]/.test(pass)
}