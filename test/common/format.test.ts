import { formatCurrency, formatNumber } from "../../src";

describe("formatNumber", () => {
    it("format number", () => {
        expect(formatNumber(100000)).toEqual("100,000");
    });

    it("format number with locale", () => {
        expect(formatNumber(100000, "es-AR")).toEqual("100.000");
    });

    it("format number with locale and format", () => {
        expect(formatNumber(100000, "es-AR", "1.2-2")).toEqual("100.000,00");
    });
});

describe("formatCurrency", () => {
    it("format currency", () => {
        expect(formatCurrency(100000)).toEqual("$100,000");
    });

    it("format currency with locale", () => {
        expect(formatCurrency(100000, "ARS")).toEqual("ARS 100,000");
    });
});
