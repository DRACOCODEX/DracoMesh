
// @mui material components

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React TS examples components
import {Card, Grid} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

//<DashboardNavbar /> (below dashboard layout)
function Scope(): JSX.Element {
  return (
    <DashboardLayout>
      <Card>
        <MDBox p={3} lineHeight={1}>
          <MDBox mb={6}></MDBox>
          {/* Topographic View*/}
          <MDBox mb={6}>
            Scope
            <Grid container spacing={3}>
              <Grid item xs>
                <iframe id="scope" src="http://localhost:4040" width="100%" height="600"></iframe>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default Scope;