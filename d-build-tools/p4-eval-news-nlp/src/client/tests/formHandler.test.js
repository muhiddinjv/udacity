import { handleSubmit } from "../js/formHandler"
   
test("handleSubmit() function exists", () => {
    expect(handleSubmit).toBeDefined();
});
test("handleSubmit() is a function", () => {
    expect(typeof handleSubmit).toBe("function");
})