import React, { useMemo, useState } from 'react';
import { Typography } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import {
    ClientSideRowModelApiModule,
    ClientSideRowModelModule,
    ModuleRegistry,
    NumberEditorModule,
    TextEditorModule,
} from "ag-grid-community";
ModuleRegistry.registerModules([
    NumberEditorModule,
    TextEditorModule,
    ClientSideRowModelApiModule,
    ClientSideRowModelModule,
]);

function Users() {
    const [rowData, setRowData] = useState([
        { name: 'John', age: 25, country: 'USA', id: 1 },
        { name: 'Sara', age: 30, country: 'UK', id: 2 },
        { name: 'Alex', age: 28, country: 'Canada', id: 3 },
    ]);
    const [columnDefs] = useState([
        { headerName: 'Name', field: 'name', sortable: true, filter: true },
        { headerName: 'Age', field: 'age', sortable: true, filter: true },
        { headerName: 'Country', field: 'country', sortable: true, filter: true },
    ]);

    const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

    const defaultColDef = useMemo(() => {
        return {
            editable: true,
        };
    }, []);

    const editCellOnChange = (e) => {
        const updatedRow = { ...e.data, [e.colDef.field]: e.newValue };
        console.log(rowData);
        setRowData((pre) => (
            pre.map((i) => i.id === e.column.colId ? updatedRow : i)
        ))
    }

    return (
        <div style={{ padding: 20 }}>
            <Typography variant="h4" gutterBottom>
                Welcome to the Users
            </Typography>

            <div style={containerStyle}>
                <div style={gridStyle}>
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        domLayout="autoHeight"
                        onCellValueChanged={editCellOnChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Users;
