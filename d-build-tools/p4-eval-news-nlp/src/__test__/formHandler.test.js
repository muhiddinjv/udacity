import { handleSubmit } from "../client/js/formHandler"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing whether handleSubmit() function exists", () => {
    test("the output is supposed to be TRUE", () => {
           expect(handleSubmit).toBeDefined();
})});
describe("Testing whether handleSubmit() is a function", () => {
    test("Its supposed to be a function", () => {
           expect(typeof handleSubmit).toBe("function");
})});