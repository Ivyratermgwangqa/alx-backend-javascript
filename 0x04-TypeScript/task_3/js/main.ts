/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert a new row and get the new row ID
const newRowID: RowID = CRUD.insertRow(row); // Expected output: Insert row {firstName: "Guillaume", lastName: "Salva"}

// Create an updated row with age
const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };

// Update the row with the new ID
CRUD.updateRow(newRowID, updatedRow); // Expected output: Update row {firstName: "Guillaume", lastName: "Salva", age: 23}

// Delete the row by ID
CRUD.deleteRow(newRowID); // Expected output: Delete row id <rowID>

