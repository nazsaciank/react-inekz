import { formatCurrency, formatNumber } from "../../src";
import { formatPercent } from "../../src/common/format";

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

    it("format currency with EUR currency", () => {
        const value = formatCurrency(100000, "EUR");
        expect(value).toEqual("€100,000");
    });

    it("format currency with EUR currency and code display", () => {
        const value = formatCurrency(100000, "EUR", "code");
        expect(value).toEqual("EUR 100,000");
    });

    it("format currency with EUR currency and name display", () => {
        const value = formatCurrency(100000, "EUR", "name");
        expect(value).toEqual("100,000 euros");
    });

    it("format currency with ARS currency and symbol display", () => {
        const value = formatCurrency(100000, "ARS", "symbol");
        expect(value).toEqual("ARS 100,000");
    });

    it("format currency with ARS currency and narrowSymbol display", () => {
        const value = formatCurrency(100000, "ARS", "narrowSymbol");
        expect(value).toEqual("$100,000");
    });

    it("format currency with locale", () => {
        expect(formatCurrency(100000, "USD", "narrowSymbol", "es-AR")).toEqual("$ 100.000");
    });

    it("format currency with locale and format", () => {
        expect(formatCurrency(100000, "USD", "narrowSymbol", "es-AR", "1.2-2")).toEqual("$ 100.000,00");
    });
});

describe("formatPercent", () => {
    it("format percent", () => {
        expect(formatPercent(10)).toEqual("1,000%");
    });
});
