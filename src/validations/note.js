const Validator = require("validator");

module.exports = function validateNote(title, body) {
    let errors = {};

    if (Validator.isEmpty(title)) {
        errors.title = "Title cannot be empty"
    }

    if (Validator.isEmpty(body)) {
        errors.body = "Body cannot be empty"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}