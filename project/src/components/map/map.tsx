import { Icon, Marker } from 'leaflet';
import { CityType, OffersType, LocationType } from '../../types/types';
import { useEffect, useRef } from 'react';
import { useMap } from '../../hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../constants';


type MapProps = {
    city: CityType;
    offers: OffersType;
    selectedPoint: LocationType;
}

function Map(props: MapProps) {
  const { city, offers, selectedPoint } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

  useEffect(() => {
    if (map && offers !== undefined) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined
              ? currentCustomIcon
              : defaultCustomIcon
          ).addTo(map);

      });
    }

  }, [map, offers]);

  return (
    <div className="cities__map" style={{height: '100%'}} ref={mapRef}>
    </div>
  );
}

export default Map;
