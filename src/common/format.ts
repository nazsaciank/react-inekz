export const formatNumber = (value: string | number, locale = "en-US", digitInfo = "1.0-2") => {
    if (typeof value === "string") value = Number(value);

    const [minIntDig, fracDig] = digitInfo.split(".");
    if (!minIntDig || !fracDig) throw new Error("Invalid digit format");

    const [minFracDig, maxFracDig] = fracDig.split("-");
    if (!minFracDig || !maxFracDig) throw new Error("Invalid digit format");

    return new Intl.NumberFormat(locale, {
        style: "decimal",
        useGrouping: true,
        minimumIntegerDigits: Number(minIntDig),
        minimumFractionDigits: Number(minFracDig),
        maximumFractionDigits: Number(maxFracDig),
    }).format(value);
};

export const formatCurrency = (
    value: string | number,
    currency = "USD",
    display: string = "symbol",
    locale = "en-US",
    digitInfo = "1.0-2"
) => {
    if (typeof value === "string") value = Number(value);

    const [minIntDig, fracDig] = digitInfo.split(".");

    if (!minIntDig || !fracDig) throw new Error("Invalid digit format");

    const [minFracDig, maxFracDig] = fracDig.split("-");

    if (!minFracDig || !maxFracDig) throw new Error("Invalid digit format");

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        currencyDisplay: display,
        useGrouping: true,
        minimumIntegerDigits: Number(minIntDig),
        minimumFractionDigits: Number(minFracDig),
        maximumFractionDigits: Number(maxFracDig),
    }).format(value);
};

/* export const formatDate = (value: string | number, locale = 'en-US', format = 'shortDate') => {
    if (typeof value === 'string') value = Number(value)

    const opts: Intl.DateTimeFormatOptions = {}

    switch (format) {
        case 'short':
        case 'medium':
        case 'long':
        case 'full':
            opts.dateStyle = format
            break
        case 'shortDate':
            opts.day = 'numeric'
            opts.month = 'numeric'
            opts.year = '2-digit'
            break
        case 'mediumDate':
            opts.day = 'numeric'
            opts.month = 'short'
            opts.year = 'numeric'
            break
        case 'longDate':
            opts.day = 'numeric'
            opts.month = 'long'
            opts.year = 'numeric'
            break
        case 'fullDate':
            opts.day = 'numeric'
            opts.month = 'long'
            opts.year = 'numeric'
            opts.weekday = 'long'
            break
        case 'shortTime':
            opts.hour = 'numeric'
            opts.minute = 'numeric'
            break
        case 'mediumTime':
            opts.hour = 'numeric'
            opts.minute = 'numeric'
            opts.second = 'numeric'
            break
        case 'longTime':
            opts.hour = 'numeric'
            opts.minute = 'numeric'
            opts.second = 'numeric'
            opts.timeZoneName = 'short'
            break
        case 'fullTime':
            opts.hour = 'numeric'
            opts.minute = 'numeric'
            opts.second = 'numeric'
            opts.timeZoneName = 'long'
            break
        default:
            break
    }

    return new Intl.DateTimeFormat(locale, opts).format(value)
}

export const formatPercent = (value: string | number, locale = 'en-US', digitInfo = '1.0-2') => {
    if (typeof value === 'string') value = Number(value)

    const [minIntDig, fracDig] = digitInfo.split('.')
    if (!minIntDig || !fracDig) throw new Error('Invalid digit format')

    const [minFracDig, maxFracDig] = fracDig.split('-')
    if (!minFracDig || !maxFracDig) throw new Error('Invalid digit format')

    return new Intl.NumberFormat(locale, {
        style: 'percent',
        useGrouping: true,
        minimumIntegerDigits: Number(minIntDig),
        minimumFractionDigits: Number(minFracDig),
        maximumFractionDigits: Number(maxFracDig),
    }).format(value)
}

export const formatBytes = (value: string | number, locale = 'en-US', digitInfo = '1.0-2') => {
    if (typeof value === 'string') value = Number(value)

    const [minIntDig, fracDig] = digitInfo.split('.')
    if (!minIntDig || !fracDig) throw new Error('Invalid digit format')

    const [minFracDig, maxFracDig] = fracDig.split('-')
    if (!minFracDig || !maxFracDig) throw new Error('Invalid digit format')

    return new Intl.NumberFormat(locale, {
        style: 'unit',
        unit: 'byte',
        useGrouping: true,
        minimumIntegerDigits: Number(minIntDig),
        minimumFractionDigits: Number(minFracDig),
        maximumFractionDigits: Number(maxFracDig),
    }).format(value)
}
 */
