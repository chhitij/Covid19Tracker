import React, { useState, useEffect } from 'react';
import Aux from '../hoc/auxillary';
import ReactGlobe, { defaultDotMarkerOptions } from 'react-globe';
import { Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const WorldMap = (props) => {
  const { worldData } = props;
  const [markers, setMarker] = useState([]);

  const makeMarker = () => {
    const wrapWorldData = worldData.map((mark: any, index: number) => {
      if (mark.country !== 'World') {
        return {
          id: index,
          city: mark.country,
          color: 'yellow',
          coordinates: [mark.coordinates.latitude, mark.coordinates.longitude],
          value: 20,
          totalCases: mark.cases.total,
        };
      } else {
        return {
          id: index,
          city: mark.country,
          color: 'red',
          coordinates: [0, 0],
          value: 20,
          totalCases: mark.cases.total,
        };
      }
    });
    return wrapWorldData;
  };
  useEffect(() => {
    setMarker(makeMarker());
  }, []);

  const getTooltipContent = (marker) => {
    return `COUNTRY: ${marker.city} (Cases: ${marker.totalCases})`;
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Aux>
      <Grid style={{ display: 'flex', alignItems: 'center' }}>
        <Grid style={{ width: '85vw', height: '80vh' }}>
          {!matches ? (
            <ReactGlobe
              size={[350, 350]}
              markers={markers}
              lightOptions={{
                ambientLightColor: 'red',
                ambientLightIntensity: 1,
              }}
              markerOptions={{
                getTooltipContent,
              }}
            />
          ) : (
            <ReactGlobe
              markers={markers}
              lightOptions={{
                ambientLightColor: 'red',
                ambientLightIntensity: 1,
              }}
              markerOptions={{
                getTooltipContent,
              }}
            />
          )}
        </Grid>
      </Grid>
    </Aux>
  );
};
export default WorldMap;
