import { Address } from "../src/Model/Address";

describe("test", () => {
  test("not the same", () => {
    const address1 = new Address("1 av", "Aza");
    const address2 = new Address("2 av", "Aza");
    expect(address1.isEqual(address2)).toBeFalsy();
  });

  test("same same", () => {
    const address1 = new Address("1 av", "Aza");
    const address2 = new Address("1 av", "Aza");
    expect(address1.isEqual(address2)).toBeTruthy();
  });

  test("compare to null", () => {
    const address1 = new Address("1 av", "Aza");
    const address2 = null;
    expect(address1.isEqual(address2)).toBeFalsy();
  });

  test("first Address in null throw exception", async () => {
    const address1 = null;
    const address2 = new Address("2 av", "Aza");
    expect(() => {
      address1.isEqual(address2);
    }).toThrow(TypeError);
  });
});
