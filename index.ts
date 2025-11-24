import { filter, map, of, tap } from "rxjs";
import obs$ from "./observable";

obs$.subscribe({
  next: (data) => console.log(`Received at: `, data),
  complete: () => console.log("All data received."),
});

of(1, 2, 3)
  .pipe(
    filter((x) => x % 2 === 1),
    map((x) => x * 10),
    tap((x) => console.log(`Processing value: ${x}`))
  )
  .subscribe();


