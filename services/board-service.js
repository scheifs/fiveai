exports.getAllPossibleMoves = (game, playerId) => {

    let allPossibleMoves = [];

    let myCards = this.getMyCards(game, playerId);

    game.board.map(rowOfSquares => {
        rowOfSquares.map(square => {
            console.log(square);
            if (!square.color) {
                const cardToPlay = this.getHighestCardForBoardSpot(myCards, square.num);
                if (cardToPlay) {
                    allPossibleMoves.push({ card: cardToPlay, boardNumber: square.num})
                }
            }
        })
    });

    return allPossibleMoves;

}

exports.getMyCards = (game, playerId) => {
    
    let myCards;

    game.players.map(player => {
        if (player.userid === playerId) {
            myCards = player.cards;
        }
    });

    return myCards;

}

exports.getHighestCardForBoardSpot = (cards, boardNumber) => {

    let cardToUse = null;
    
    let sortedCards = cards.sort();

    sortedCards.map(card => {
        if (card <= boardNumber) {
            cardToUse = card;
        }
    });

    return cardToUse;    
    
}