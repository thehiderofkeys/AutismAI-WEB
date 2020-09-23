export function isAllowedNumericInput(val) {
    // To allow empty input
    if (val === "") {
        return true;
    }

    if (!isNumeric(val)) {
        return false;
    }

    return true;
}


export function isNumeric(n) {
    // eslint-disable-next-line no-restricted-globals
    return !isNaN(parseFloat(n)) && isFinite(n);
}