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
import { Regions } from "..";
interface Props {
    labels: string[];
    datasets: {
      label: string;
      color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
      data: number[];
    }[];
}


function verticalBarChartData(regions: Regions): Props {
  return {
    labels: ["Azure Node, West US", "DrakubeGraphyon Lab, MidWest US", "NDRC Comms Trailer, MidWest US", "OCI Node, East US"],
    datasets: [
      {
        label: "Cluster Status",
        color: "success",
        data: [regions.westCoastStatus, regions.midWestCoastStatusDrakubeGraphyonNode, regions.midWestCoastStatusNDRCComms, regions.eastCoastStatus],
      },
    ],
};
}

export default verticalBarChartData;
