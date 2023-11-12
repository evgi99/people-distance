import { Address } from "./Address";
import { Name } from "./Name";

export class Person {
  fullName: Name;
  address: Address;

  constructor(fullName: Name, address: Address) {
    this.fullName = fullName;
    this.address = address;
  }
  isConnected(other: Person): boolean {
    return (
      other.fullName.isEqual(this.fullName) ||
      other.address.isEqual(this.address)
    );
  }

  isEquals(other: Person | null): boolean {
    return (
      this != null &&
      other != null &&
      this.fullName.isEqual(other.fullName) &&
      this.address.isEqual(other.address)
    );
  }

  toString() {
    return `[${this.fullName} From ${this.address}]`;
  }
}
