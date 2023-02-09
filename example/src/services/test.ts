import { HttpService, Inject, Injectable } from "react-inekz";

@Injectable()
export default class TestService {
    @Inject(HttpService) private Http!: HttpService;

    constructor() {
        console.log("TestService");
    }

    test() {
        return this.Http.get("https://jsonplaceholder.typicode.com/todos/1");
    }
}
