/**
 =========================================================
 * Material Dashboard 2 PRO React TS - v1.0.1
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// @mui material components

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React TS examples components
import {Card, Grid} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

//<DashboardNavbar /> (below dashboard layout)
function k8sData(): JSX.Element {

  return (
    <DashboardLayout>
        <Card>
        <MDBox p={3} lineHeight={1}>
          <MDBox mb={6}></MDBox>

          {/* Kommander k8s*/}
          <MDBox mb={6}>
            <Grid container spacing={3}>
              <Grid item xs>
                <iframe src="https://10.10.100.3/dkp/kubernetes/#/workloads?namespace=kommander" width="100%" height="1000" scrolling="no" frameBorder="0"></iframe>
              </Grid>
            </Grid>
          </MDBox>

        </MDBox>
        </Card>
    </DashboardLayout>
  );
}

export default k8sData;
