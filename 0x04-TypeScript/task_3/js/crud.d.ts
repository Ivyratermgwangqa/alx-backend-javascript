import { RowID, RowElement } from './interface';

// Ambient type declarations for CRUD operations
declare module 'crud' {
  function insertRow(row: RowElement): RowID;
  function deleteRow(rowId: RowID): void;
  function updateRow(rowId: RowID, row: RowElement): RowID;
}
