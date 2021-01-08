

export function converteString(valor: number) {
    return valor.toLocaleString('en-US', { minimumFractionDigits: 4 });
}

export function convertePrecision(valor: number) {
    return valor.toPrecision(9)
}
