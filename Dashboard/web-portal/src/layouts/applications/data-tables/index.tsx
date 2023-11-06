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
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import verticalBarChartData from "./data/verticalBarChartData";
import MapChart from "components/MapChart";
import {Grid} from "@mui/material";
import { useEffect, useState } from "react";
import { useRegionData } from "db/service/service";
import ClusterData from "./data/clusterData";

export interface Regions {
  westCoastStatus: number;
  midWestCoastStatusDrakubeGraphyonNode: number;
  midWestCoastStatusNDRCComms: number;
  eastCoastStatus: number;
  id: number;
}

//<DashboardNavbar /> (below dashboard layout)
function DataTables(): JSX.Element {

  const { data: regionsData } = useRegionData();
  const [regions, setRegions] = useState<Regions>({
    westCoastStatus: 0,
    midWestCoastStatusDrakubeGraphyonNode: 100,
    midWestCoastStatusNDRCComms: 0,
    eastCoastStatus: 100,
    id: 0
  });

  // Update the state when `regionsData` changes
  useEffect(() => {
    if (regionsData) {
      setRegions({
        westCoastStatus: regionsData.westCoastStatus,
        midWestCoastStatusDrakubeGraphyonNode: regionsData.midWestCoastStatusDrakubeGraphyonNode,
        midWestCoastStatusNDRCComms: regionsData.midWestCoastStatusNDRCComms, 
        eastCoastStatus: regionsData.eastCoastStatus,
        id: regionsData.id
      });
    }
  }, [regionsData]);


  return (
    <DashboardLayout>
      <Card>
        <MDBox p={3} lineHeight={1}>
          <MDTypography variant="h5" fontWeight="medium">
            Misson Command
          </MDTypography>
          <MDTypography variant="button" color="text">
          </MDTypography>
          <MDBox mb={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <MapChart region={regions}/>
              </Grid>
              <Grid item xs={12} md={6}>
                <VerticalBarChart
                  icon={{color: "dark", component: "leaderboard"}}
                  title="Drakube-Graphyon Nodes"
                  description=""
                  chart={verticalBarChartData(regions)}
                />
              </Grid>
            </Grid>
            <ClusterData title="Cluster Data"/>
          </MDBox>
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default DataTables;
