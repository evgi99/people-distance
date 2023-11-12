import { Person } from "../Model/Person";
import { PersonNode } from "./PersonNode";


export class PopulationGraph {
  peoples: PersonNode[];

  constructor() {
    this.peoples = [];
  }

  createNode(p: Person) {
    if(!this.isExistInPopulation(p)){
      const personNode = new PersonNode(p);
      for (let i = 0; i < this.peoples.length; i++) {
        const otherPerson = this.peoples[i];
        if (personNode.person.isConnected(otherPerson.person) && !otherPerson.person.isEquals(personNode.person)) {
          this.addSimpleEdge(personNode, otherPerson);
        }
      }
      this.peoples.push(personNode);
    }
  }

  private isExistInPopulation(p: Person){
    let isExist = false;
    for(let i=0;i<this.peoples.length;i++){
      if(p.isEquals(this.peoples[i].person)){
        isExist = true;
        break;
      }
    }
    return isExist;
  }

  populationSize(){
    return this.peoples.length;
  }

  addSimpleEdge(v: PersonNode, w: PersonNode) {
    v.addNeighbor(w);
    w.addNeighbor(v);
  }

  printGraph(){
    for(const node of this.peoples){
      console.log(`node: ${node}`);
    }
  }

  shortestPath(start: PersonNode, target: PersonNode):number {
    const visited: Set<PersonNode> = new Set();
    const queue: [PersonNode, PersonNode[]][] = [];
  
    queue.push([start, [start]]);
  
    while (queue.length > 0) {
      const [currentNode, currentPath] = queue.shift()!;
  
      if (currentNode === target) {
        return currentPath.length - 1;
      }
  
      visited.add(currentNode);
  
      for (const neighbor of currentNode.adjacents) {
        if (!visited.has(neighbor)) {
          queue.push([neighbor, [...currentPath, neighbor]]);
        }
      }
    }
    return -1;
  }
}
