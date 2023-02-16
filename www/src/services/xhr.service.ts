import { HttpOptions } from "react-inekz";
import { Inject, Injectable } from "../decorators";
import { HttpService } from "./http.service";

@Injectable()
export class XhrService {
    
    @Inject(HttpService) private Http: HttpService;
    
    public get = (url: string, options?: HttpOptions) => {
        return this.Http.get(url, options);
    }
}
