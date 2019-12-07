export function getCoordinatesByCellIndex(cellIndex) {
  const [, index] = cellIndex.split("DTCELL");
  const [row, column] = index.split("_");
  return { row: Number.parseInt(row, 10), column: Number.parseInt(column, 10) };
}
