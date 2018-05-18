import React from 'react';

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

function renderValue(card, position, trim) {
    const classes = `value-${position}`;
    const valueClasses = `value ${card.suit}`;
    const suitClasses = `suit ${card.suit}`;
    const value = trim && isNaN(card.value) ? card.value.charAt(0) : card.value;

    return (<div className={classes}>
        <div className={valueClasses}>{value}</div>
        <div className={suitClasses}>{card.symbol}</div>
    </div>);
}

function renderCard(card, facedown = false, classes = '', trim = false) {
    const mainClasses = `playcard ${facedown ? 'facedown' : ''} ${classes}`;
    const centerClasses = `center-value ${card.suit}`;
    card.symbol = renderSuitSymbol(card.suit);

    return (
        <div className={mainClasses}>
            <div className="frame">
                <div className="top-values">
                    {renderValue(card, 'left', trim)}
                    {renderValue(card, 'right', trim)}
                </div>
                <div className={centerClasses}>
                    {card.value}
                </div>
                <div className="bottom-values">
                    {renderValue(card, 'left', trim)}
                    {renderValue(card, 'right', trim)}
                </div>
            </div>
        </div>
    );
}

module.exports = {
    renderSuitSymbol,
    renderCard
}