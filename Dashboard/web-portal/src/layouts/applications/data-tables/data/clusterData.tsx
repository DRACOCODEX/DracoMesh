// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React TS examples components
import {Card, Icon} from "@mui/material";
import MDTypography from "components/MDTypography";
import {useNavigate} from "react-router-dom";

interface Props {
    title: string;
}

//<DashboardNavbar /> (below dashboard layout)
function ClusterData(props: Props): JSX.Element {
  //handle clicking to access clusters
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/mission-command/k8sflow');
  };
    return (
        <Card>
        <MDBox py={2} pr={2} pl={1}>
          <MDBox display="flex" px={0} pt={0} marginBottom={2} marginTop={5}>
            <MDBox
              width="4rem"
              height="4rem"
              bgColor="dark"
              variant="gradient"
              borderRadius="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              mt={-5}
              mr={2}
            >
              <Icon onClick={handleClick} fontSize="medium">leaderboard</Icon>
            </MDBox>
          <MDBox mt={-2}>
            <MDTypography variant="h6">{props.title}</MDTypography>
          </MDBox>
         </MDBox>
          <iframe src=" https://10.10.100.3/dkp/kommander/dashboard/clusters" scrolling="no" width="100%" height="500" frameBorder="0"></iframe>
        </MDBox>
        </Card>
      );
  }
  
 export default ClusterData;