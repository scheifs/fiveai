const boardService = require('./services/board-service');

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

exports.getMove = (game, player) => {

    const cards = boardService.getMyCards(game, player);
    if (cards.length < 4) {
        
        return {
            player,
            move: 'draw'
        }
    } else {

        const allPossibleMoves = boardService.getAllPossibleMoves(game, player);
        const selectedMove = allPossibleMoves[randomNumber(0,allPossibleMoves.length)];

        return {
            player: player,
            move: 'play',
            card: selectedMove.card,
            boardNumber: selectedMove.boardNumber
        }
    }

    
}