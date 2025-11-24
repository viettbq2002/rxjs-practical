import { Observable } from "rxjs";
import { getPeople, type PersonType } from "./helper";

const obs$ = new Observable<PersonType>((subscriber) => {
  const people = getPeople();
  people.forEach((person, index) => {
    setTimeout(() => {
      subscriber.next(person);
      if (index === people.length - 1) {
        subscriber.complete();
      }
    }, index * 1000);
  });
});

export default obs$;
