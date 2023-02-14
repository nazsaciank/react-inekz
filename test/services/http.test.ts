import { HttpService, useService } from "../../src";

describe("HttpService", () => {
    it("should return a response method get", () => {
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        const httpService = useService(HttpService);
        httpService.get(url).subscribe((res) => {
            expect(res).toEqual({
                body: {
                    completed: false,
                    id: 1,
                    title: "delectus aut autem",
                    userId: 1,
                },
            });
        });
    });
});
