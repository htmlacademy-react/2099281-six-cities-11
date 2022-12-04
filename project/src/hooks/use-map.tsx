import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import { CityType } from '../types/types';
import { ZOOM_MAP } from '../constants';

const Tile = {
  Layer: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
} as const;

function useMap(
  mapRef: MutableRefObject<HTMLDivElement | null>,
  city: CityType
): Map | null {

  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);
  const {location} = city;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: ZOOM_MAP,
      });

      const layer = new TileLayer(Tile.Layer, { attribution: Tile.Attribution });

      instance.addLayer(layer);

      setMap(instance);

      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export {useMap};
