import React, { useState, useEffect } from 'react';
import Aux from '../hoc/auxillary';
import ReactGlobe, { defaultDotMarkerOptions } from 'react-globe';
import { Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import './Worldmap.css';

const WorldMap = (props) => {
  const { worldData } = props;
  const [markers, setMarker] = useState([]);
  const [customToolTip, setCustomToolTip] = useState(null);

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
          dailyIncrementOftotal: mark.cases.new,
          activeCase: mark.cases.active,
          decasedCase: mark.deaths.total,
          dailyIncrementOfDecased: mark.deaths.new,
          recovered: mark.cases.recovered,
        };
      } else {
        return {
          id: index,
          city: mark.country,
          color: 'red',
          coordinates: [0, 0],
          value: 20,
          totalCases: mark.cases.total,
          dailyIncrementOftotal: mark.cases.new,
          activeCase: mark.cases.active,
          decasedCase: mark.deaths.total,
          dailyIncrementOfDecased: mark.deaths.new,
          recovered: mark.cases.recovered,
        };
      }
    });
    return wrapWorldData;
  };
  useEffect(() => {
    setMarker(makeMarker());
  }, []);

  const getTooltipContent: any = (marker) => {
    return `COUNTRY: ${marker.city} (CORONA-CASE: ${marker.totalCases})`;
  };

  const onClickMarker = (marker, markerObject, event) => {
    setCustomToolTip(marker);
  };

  const onDefocus = (previousCoordinates, event) => {
    setCustomToolTip(null);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const ShowMobileToolTip = () => {
    return (
      <Aux>
        {customToolTip && (
          <Grid className="ListSize">
            <Grid className="countryStyle itemlist">
              <Grid item>{customToolTip.city}</Grid>
            </Grid>
            <Grid item className="totalCase itemlist">
              <Grid item>TotalCase</Grid>
              <Grid item>
                [{customToolTip.dailyIncrementOftotal}]{' '}
                {customToolTip.totalCases}
              </Grid>
            </Grid>
            <Grid item className="activeCase itemlist">
              <Grid item>Active</Grid>
              <Grid item>{customToolTip.activeCase}</Grid>
            </Grid>
            <Grid item className="recoveredCase itemlist">
              <Grid item>Recovered</Grid>
              <Grid item>{customToolTip.recovered}</Grid>
            </Grid>
            <Grid item className="decasedCase itemlist">
              <Grid item>Decased</Grid>
              <Grid item>
                [{customToolTip.dailyIncrementOfDecased}]
                {customToolTip.decasedCase}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Aux>
    );
  };

  return (
    <Aux>
      <Grid style={{ display: 'flex', alignItems: 'center' }}>
        <Grid style={{ width: '85vw', height: '80vh' }}>
          {!matches ? (
            <Aux>
              <ShowMobileToolTip />
              <ReactGlobe
                size={[350, 350]}
                markers={markers}
                onClickMarker={onClickMarker}
                onDefocus={onDefocus}
                lightOptions={{
                  ambientLightColor: 'red',
                  ambientLightIntensity: 1,
                }}
                markerOptions={{
                  getTooltipContent,
                }}
              />
            </Aux>
          ) : (
            <Aux>
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
            </Aux>
          )}
        </Grid>
      </Grid>
    </Aux>
  );
};
export default WorldMap;
