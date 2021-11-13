import { checkUrl } from "../js/checkUrl";

test("Testing input URL", () => {
  expect(checkUrl(84)).toBeFalsy();
  expect(checkUrl('string')).toBeFalsy();
  expect(checkUrl('1@#$%&')).toBeFalsy();
  expect(checkUrl('https://mukhiddinaka.web.app')).toBeTruthy();
})