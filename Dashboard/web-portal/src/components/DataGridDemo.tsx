import Box from '@mui/material/Box';
import { DataGridPro, GridColDef, GridToolbarQuickFilter } from '@mui/x-data-grid-pro';
import { useQuery } from 'react-query'
import { getPatients} from '../services/data'

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
}

const columns: GridColDef[] = [
  { field: 'icn', 
    headerName: 'ICN',
     width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    editable: true,
  },
  {
    field: 'dateOfBirth',
    headerName: 'Date of Birth',
    type: 'date',
    width: 110,
    editable: true,
    resizable: true
  },
  {
    field: 'last4Ssn',
    headerName: 'Last 4 SSN',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
  },
  {
    field: 'eTag',
    headerName: 'Etag',
    description: 'This column has a value getter and is not sortable.',
    flex: 1,
    editable: true,
    sortable: false
  },
];


function DataGridDemo() {

  // Queries
const { isLoading, isError, data, error } = useQuery('patients', getPatients)
 
if (isLoading) {
  return <span>Loading...</span>
}

if (isError && error instanceof Error) {
  return <span>Error: {error.message}</span>
}


  return (
    <Box sx={{ height: 'auto', width: '100%' }}>
      <DataGridPro
        rows={data}
        columns={columns}
        components={{ Toolbar: QuickSearchToolbar }}
        pageSize={5}
        getRowId={(row) => row.icn}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        autoHeight={true}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

export default DataGridDemo;