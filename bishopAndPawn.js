function bishopAndPawn(bishop, pawn) {
  let [bCol, bRow] = bishop.split('')
  let [pCol, pRow] = pawn.split('')
  return Math.abs(bCol.charCodeAt(0) - pCol.charCodeAt(0)) === Math.abs(bRow - pRow)
}
