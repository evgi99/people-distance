import { Person } from "../Model/Person";

export class PersonNode {
    person: Person;
    adjacents: PersonNode[];
  
    constructor(p: Person) {
      this.person = p;
      this.adjacents = [];
    }
  
    addNeighbor(pnode: PersonNode) {
      this.adjacents.push(pnode);
    }
  
    toString() {
      return this.person + ": adjacent=[" + this.adjacents.map((x) => x.person) + `] }`;
    }
  }