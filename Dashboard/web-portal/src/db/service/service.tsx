import axios from "axios";
import { Regions } from "layouts/applications/data-tables";
import { useQuery } from "react-query";

export function useRegionData() {
    return useQuery<Regions>('regions', async () => {
      const response = await axios.get<Regions>('http://localhost:3004/regions/1');
      return response.data;
    }, {
      refetchInterval: 500
    });
  }
//Use Context to use the region value instead of requiring it to be passed in
export function setRegionStatus(region: Regions){
    axios
    .put("http://localhost:3004/regions/1", region)
    .then()
    .catch((err) => console.log(err));
}