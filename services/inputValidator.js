const VALID = true
const INVALID = false

export const stringValidator = (str) => {
    if (str === null || str === '') {
        return INVALID
    }
    return VALID
}