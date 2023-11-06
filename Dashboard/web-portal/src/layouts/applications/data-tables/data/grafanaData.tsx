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
function GrafanaData(): JSX.Element {

  return (
    <DashboardLayout>
        <Card>
        <MDBox p={3} lineHeight={1}>
          <MDBox mb={6}></MDBox>

          {/* Grafana via DKP*/}
          <MDBox mb={6}>
            <Grid container spacing={3}>
              <Grid item xs>
                <iframe src="https://10.10.100.3/dkp/grafana/?orgId=1&refresh=10s" width="100%" height="500" scrolling="no" frameBorder="0"></iframe>
              </Grid>
            </Grid>
          </MDBox>

        {/* Grafana via DKP, API Server Status */}
          <MDBox mb={6}>
            <Grid container spacing={3}>
              <Grid item xs>
                <iframe src="https://10.10.100.3/dkp/grafana/d/09ec8aa1e996d6ffcd6817bbaff4db1b/kubernetes-api-server?orgId=1&refresh=10s" scrolling="no"  width="100%" height="500" frameBorder="0"></iframe>
              </Grid>
            </Grid>
          </MDBox>

          {/* Grafana URL create via Share, Embedded*/}
          <MDBox mb={6}>
            <Grid container spacing={3}>
              <Grid item xs>
                <iframe src="https://10.10.100.3/dkp/grafana/d/85a562078cdf77779eaa1add43ccec1e/kubernetes-compute-resources-namespace-pods?orgId=1&refresh=10s&var-datasource=default&var-cluster=&var-namespace=kube-system" width="100%" height="500" scrolling="no" frameBorder="0"></iframe>
              </Grid>
            </Grid>
          </MDBox>

        </MDBox>
        </Card>
    </DashboardLayout>
  );
}


export default GrafanaData;
