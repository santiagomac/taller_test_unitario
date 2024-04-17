const validateEmail = require("./index")

test("return true if is a validate correct email", () => {
    expect(validateEmail("smazuerac@unac.edu.co")).toBe(true)
})

test("return false if is a wrong email", () => {
    expect(validateEmail("cualquiecosa")).toBe(false)
})