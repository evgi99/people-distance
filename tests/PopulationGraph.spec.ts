import mockData from "./fakedata";
import { PopulationGraph } from "../src/GraphService/PopulationGraph";
import { Person } from "../src/Model/Person";
import { Name } from "../src/Model/Name";
import { Address } from "../src/Model/Address";

describe("test graph", () => {
  let allPeople = new PopulationGraph();

  beforeAll(() => {
    mockData.forEach((aPerson) => {
      const person = new Person(
        new Name(aPerson.firstname, aPerson.lastname),
        new Address(aPerson.street, aPerson.city)
      );
      allPeople.createNode(person);
    });
    allPeople.printGraph();
  });

  test("path is -1 : not connected", () => {
    const distance = allPeople.shortestPath(allPeople.peoples[0],allPeople.peoples[5]);
    expect(distance).toBe(-1);
  })

  test("path is 1 : connected directly", () => {
    const distance = allPeople.shortestPath(allPeople.peoples[0],allPeople.peoples[1]);
    expect(distance).toBe(1);
  })

  test("path is 2 : connected directly", () => {
    const distance = allPeople.shortestPath(allPeople.peoples[2],allPeople.peoples[1]);
    expect(distance).toBe(2);
  })

  test("path is 0 : same person", () => {
    const distance = allPeople.shortestPath(allPeople.peoples[1],allPeople.peoples[1]);
    expect(distance).toBe(0);
  })

  test("path is 1 : second cluster", () => {
    const distance = allPeople.shortestPath(allPeople.peoples[4],allPeople.peoples[5]);
    expect(distance).toBe(1);
  })

  test("population size is 6", () => {
    const populationSize = allPeople.populationSize();
    expect(populationSize).toBe(mockData.length -1);
  })

});
