export class Address {
  street: string;
  city: string;

  constructor(street: string, city: string) {
    this.street = street;
    this.city = city;
  }

  isEqual(other: Address | null): boolean {
    return (
      this != null &&
      other != null &&
      this.street === other.street &&
      this.city === other.city
    );
  }

  toString() {
    return `{${this.street}, ${this.city}}`;
  }
}
