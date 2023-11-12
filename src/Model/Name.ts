export class Name {
  firstname: string;
  lastname: string;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  isEqual(other: Name | null): boolean {
    return (
      this != null &&
      other != null &&
      this.firstname === other.firstname &&
      this.lastname === other.lastname
    );
  }

  toString() {
    return `{${this.firstname} ${this.lastname}}`;
  }
}
