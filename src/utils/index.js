export function exp(value) {
    let count = 0
    if (value > 1) {
        while (value > 10) {
            value = value / 10
            count++
        }
        return `${formatNumber(value)} * 10^${count}`
    }

    while (value < 1) {
        value = value * 10
        count++
    }

    return `${formatNumber(value)} * 10^-${count}`
}

export function exponencial(value) {
    const exponentialNumber = value.toExponential(2);
    const parts = exponentialNumber.split(/[eE]/);
    const coefficient = parts[0];
    const exponent = parts[1];
    return coefficient.replace(/(\.0+|(\.\d+?)0+)$/, '') + 'e' + exponent;
}

export function getUnit(value) {
    const result = {
        F: 'N',
        r: 'm',
        q1: 'C',
        q2: 'C',
        E: 'J',
        U: 'V'
    }
    return result[value] ? result[value] : '';
}

function formatNumber(value) {
    let formated = value.toFixed(4)
    return formated.replace(/(\.0|(?<=\.\d)0+)$/, '')
}