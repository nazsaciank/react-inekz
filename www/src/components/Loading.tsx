import React from "react";
import { useService } from "../hooks";
import TestService from "../services/test";

export default function Loading() {
    const [isLoading, setIsLoading] = React.useState(false);

    const Test: TestService = useService('Test');

    React.useEffect(() => {
        Test.isLoading.subscribe(setIsLoading);
    });

    return <span>{isLoading ? "Loading..." : ""}</span>;
}
