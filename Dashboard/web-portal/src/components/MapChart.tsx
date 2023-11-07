import { Regions } from "layouts/applications/data-tables";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line, Annotation
} from "react-simple-maps";
import {useState} from "react";

interface MapChartProps {
  region: Regions
}


function determineIfAlertNeeded(statusPercentage: number){
  if(statusPercentage >= 0 && statusPercentage <= 74){
      return 'regionAlert';
  }
  return "regionHealthy";
}

function determineStatusFill(statusPercentage: number){
  switch (true) {
    case (statusPercentage >= 0 && statusPercentage <= 49):
      return '#ff3300';
    case (statusPercentage >= 50 && statusPercentage <= 74):
      return '#FAFA12';
    default:
      return '#4caf4f'
  }
}

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
const MapChart = (props: MapChartProps) => {
const [annotation, setAnnotation] = useState("");

  return (
    <ComposableMap projection="geoAlbersUsa">

      <Geographies geography={geoUrl}>
        {({geographies}) => (
          <>
            {geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill="#DDD"
              />
            ))}
          </>
        )}

      </Geographies>
      <Line
        coordinates={[[-77.4874, 39.0438], [-96.0430, 41.1545], [-121.8853, 37.3387]]}
        stroke="#4caf4f"
        strokeWidth={1}
      />
      <Marker coordinates={[-77.4874, 39.0438]} onMouseEnter={() => setAnnotation("East Coast")}>
        <circle className={determineIfAlertNeeded(props.region.eastCoastStatus)} r={10} fill={determineStatusFill(props.region.eastCoastStatus)}/>
      </Marker>
      <Marker coordinates={[-96.0430, 41.1545]} onMouseEnter={() => setAnnotation("Mid West")}>
        <circle className={determineIfAlertNeeded(Math.min(props.region.midWestCoastStatusDrakubeGraphyonNode, props.region.midWestCoastStatusNDRCComms))} r={10} fill={determineStatusFill(Math.min(props.region.midWestCoastStatusDrakubeGraphyonNode, props.region.midWestCoastStatusNDRCComms))}/>
        <text alignmentBaseline="central" dx={-4} fontSize={15} style={{fontWeight: 'bold'}}>2</text>
      </Marker>
      <Marker coordinates={[-121.8853, 37.3387]} onMouseEnter={() => setAnnotation("West Coast")}>
        <circle className={determineIfAlertNeeded(props.region.westCoastStatus)} r={10} fill={determineStatusFill(props.region.westCoastStatus)}/>
      </Marker>

      {annotation == "East Coast" ?
      <Annotation
        subject={[-77.518, 39.0768]}
        dx={-15}
        dy={30}
        connectorProps={{
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#000">
          {"OCI Node (Oracle) and/or AWS"}
        </text>
        <text x="-8" y="20" textAnchor="end" alignmentBaseline="middle" fill="F53">
          {"Region: East US"}
        </text>
        <text x="-8" y="40" textAnchor="end" alignmentBaseline="middle" fill="F53">
          {"Location: Ashburn, VA"}
        </text>
      </Annotation>
      : ''
      }
      {annotation == "Mid West" ?
        <Annotation
          subject={[-96.018, 40.9768]}
          dx={-15}
          dy={60}
          connectorProps={{
            stroke: "#000",
            strokeWidth: 3,
            strokeLinecap: "round"
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#000">
            {"NDRC Comms Trailer"}
          </text>
          <text x="-8" y="20" textAnchor="end" alignmentBaseline="middle" fill="F53">
            {"Region: Mid West"}
          </text>
          <text x="-8" y="40" textAnchor="end" alignmentBaseline="middle" fill="F53">
            {"Location: Bellvue, NE"}
          </text>
        </Annotation>
      : ""
      }
      {annotation == "Mid West" ?
        <Annotation
          subject={[-96.018, 40.9768]}
          dx={-15}
          dy={-60}
          connectorProps={{
            stroke: "#000",
            strokeWidth: 3,
            strokeLinecap: "round"
          }}
        >
          <text x="-8" y='-40' textAnchor="end" alignmentBaseline="middle" fill="#000">
            {"DrakubeGraphyon Node"}
          </text>
          <text x="-8" y="-20" textAnchor="end" alignmentBaseline="middle" fill="F53">
            {"Region: Mid West"}
          </text>
          <text x="-8" y="0" textAnchor="end" alignmentBaseline="middle" fill="F53">
            {"Location: Papillion, NE"}
          </text>
        </Annotation>
      : ''
      }
      {annotation == "West Coast" ?
        <Annotation
          subject={[-122.018, 37.5768]}
          dx={45}
          dy={-90}
          connectorProps={{
            stroke: "#000",
            strokeWidth: 3,
            strokeLinecap: "round"
          }}
        >
          <text x="-8" y="-40" textAnchor="front" alignmentBaseline="text-after-edge" fill="#000">
            {"Azure Node"}
          </text>
          <text x="-8" y="-20" textAnchor="front" alignmentBaseline="text-after-edge" fill="F53">
            {"Region: West US"}
          </text>
          <text x="-8" y="0" textAnchor="front" alignmentBaseline="text-after-edge" fill="F53">
            {"Location: San Jose, CA"}
          </text>
        </Annotation>
        : ''
      }
    </ComposableMap>
  );
};

export default MapChart;
