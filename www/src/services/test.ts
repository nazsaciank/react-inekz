import { BehaviorSubject, finalize, tap } from "rxjs";
import { Inject, Injectable } from "../decorators";
import { XhrService } from "./xhr.service";

@Injectable('Test')
export default class TestService {

    @Inject(XhrService) private Xhr!: XhrService;

    public isLoading = new BehaviorSubject(false);

    test() {
        this.isLoading.next(true);
        return this.Xhr.get("https://jsonplaceholder.typicode.com/todos/1")
        .pipe(
            finalize(() => this.isLoading.next(false))
        )
    }
}
