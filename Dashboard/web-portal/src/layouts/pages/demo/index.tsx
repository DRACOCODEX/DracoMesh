import { Box, Card, FormControl, FormGroup } from "@mui/material";
import MDBox from "components/MDBox";
import { useRegionData, setRegionStatus } from "db/service/service";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import PercentageSlider from "examples/Percentage Slider";
import { Regions } from "layouts/applications/data-tables";
import { useState, useEffect } from "react";

function DemoControls(): JSX.Element {

    const { data: regionsData } = useRegionData();
    const [regions, setRegions] = useState<Regions>({
      westCoastStatus: 0,
      midWestCoastStatusDinoHeadNode: 0,
      midWestCoastStatusNDRCComms: 0,
      eastCoastStatus: 0,
      id: 0
    });
  
    // Update the state when `regionsData` changes
    useEffect(() => {
      if (regionsData) {
        setRegions({
          westCoastStatus: regionsData.westCoastStatus,
          midWestCoastStatusDinoHeadNode: regionsData.midWestCoastStatusDinoHeadNode,
          midWestCoastStatusNDRCComms: regionsData.midWestCoastStatusNDRCComms, 
          eastCoastStatus: regionsData.eastCoastStatus,
          id: regionsData.id
        });
      }
    }, [regionsData]);

const regionToggle = (event: React.ChangeEvent<HTMLInputElement>, value: any) => {
    console.log("Event Target name" + event.target.name)
    console.log("Value being passed in " + value)
    setRegions({
      ...regions,
      [event.target.name]: value
    } as Regions)
  };

  const regionStatusConfirmed = (name: string, value: number | number[]) => {
    console.log(`Regions being pushed up is: ${JSON.stringify(regions)}`);
    setRegionStatus(regions);
  };


  return(
    <DashboardLayout>
        <Card>
        <MDBox p={3} lineHeight={1}>
    <Box style={{display: 'flex'}} alignItems={'center'} justifyItems={'center'}>
    <FormControl component="fieldset" variant="standard" sx={{marginBottom: '50px'}}>
    <FormGroup>
        <PercentageSlider value={regions.westCoastStatus} onChangeCommited={regionStatusConfirmed} onChange={regionToggle} name="westCoastStatus" label="West"/>
        <PercentageSlider value={regions.midWestCoastStatusDinoHeadNode} onChangeCommited={regionStatusConfirmed} onChange={regionToggle} name="midWestCoastStatusDinoHeadNode" label="MidWest DinoHead Node"/>
        <PercentageSlider value={regions.midWestCoastStatusNDRCComms} onChangeCommited={regionStatusConfirmed} onChange={regionToggle} name="midWestCoastStatusNDRCComms" label="MidWest NDRC Comms"/>
        <PercentageSlider value={regions.eastCoastStatus} onChangeCommited={regionStatusConfirmed} onChange={regionToggle} name="eastCoastStatus" label="East"/>
        </FormGroup>
    </FormControl>
  </Box>
  </MDBox>
  </Card>
  </DashboardLayout>
  )
}
export default DemoControls;
