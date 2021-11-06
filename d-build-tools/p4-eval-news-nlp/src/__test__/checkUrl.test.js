import { checkUrl } from "../client/js/checkUrl";

describe("Testing whether checkUrl is not empty", () => {
    test("It should return TRUE", (value) => {
           expect(checkUrl(value)).toBeDefined();
})});