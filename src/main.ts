import { Address } from "./Model/Address";
import { Name } from "./Model/Name";
import { Person } from "./Model/Person";

function main(){
    const n = new Name("Sidney" ,"Salois");
    const address1 = new Address("Güntzelstrasse","Mönchengladbach");
    const p = new Person(n,address1);
    console.log(`Hello from person object: ${p}`)
}

main()
