// CRUD operations
export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * 1000);
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}

import { RowID, RowElement } from './interface';

// Ambient type declarations for CRUD operations
declare module 'crud' {
  function insertRow(row: RowElement): RowID;
  function deleteRow(rowId: RowID): void;
  function updateRow(rowId: RowID, row: RowElement): RowID;
}
