export function decimalFormat(n: number, maximumFractionDigits: number) {
    return n.toLocaleString(undefined, {maximumFractionDigits: maximumFractionDigits})
}