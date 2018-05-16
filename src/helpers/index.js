function renderSuitSymbol(suit) {
    let symbol;

    switch (suit) {
        case 'heart':
            symbol = "9829";
            break;
        case 'diamond':
            symbol = "9830";
            break;
        case 'spade':
            symbol = "9824";
            break;
        case 'clover':
            symbol = "9827";
            break;
    }

    return String.fromCharCode(symbol);
}

module.exports = {
    renderSuitSymbol
}