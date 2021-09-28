import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";

import {
  setRestaurantId,
  setRestaurants,
} from "../../reducers/modules/restaurants";

import { Info, Name } from "./styles";

export const MapWindow = (props) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const { restaurants, restaurantId } = useSelector(
    (state) => state.restaurants
  );
  const { google, query, placeId } = props;

  const [details, setDetails] = useState({
    showingInfoWindow: false,
    position: {
      lat: -10,
      lng: -20
    },
    selectedPlace: {},
  });

  const onMarkerClick = (props, _, pos) => {
    setDetails({
      selectedPlace: props,
      position: {
        lat: pos.latLng.lat() + 0.00035,
        lng: pos.latLng.lng(),
      },
      showingInfoWindow: true,
    });

    map.panTo(pos.latLng);
    map.setZoom(17);
  };

  useEffect(() => {
    if (restaurantId) {
      getDetails(restaurantId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restaurantId]);

  const onMapClicked = () => {
    if (details.showingInfoWindow) {
      setDetails({
        showingInfoWindow: false,
        selectedPlace: undefined
      });
    }
  };

  const searchByQuery = useCallback(
    (map, query) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurants([]));

      const request = {
        location: map.center,
        radius: "200",
        type: ["restaurant"],
        query,
      };

      service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurants(results));
        }
      });
    },
    [dispatch, google]
  );

  const getDetails = useCallback(
    (placeId) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurantId(null));

      const request = {
        placeId,
        fields: [
          "name",
          "opening_hours",
          "formatted_address",
          "vicinity",
          "formatted_phone_number",
          "geometry",
        ],
      };

      service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurantId(place));

          map.setZoom(17);
          map.panTo(place.geometry.location);

          const xInfo = place.formatted_address || place.vicinity;

          setDetails({
            selectedPlace: { ...place, info: xInfo },
            position: {
              lat: place.geometry.location.lat() + 0.00035,
              lng: place.geometry.location.lng(),
            },
            showingInfoWindow: true,
          });
        }
      });
    },
    [google, map, dispatch]
  );

  useEffect(() => {
    if (placeId) {
      getDetails(placeId);
    }
  }, [placeId, getDetails]);

  useEffect(() => {
    if (query) {
      searchByQuery(map, query);
    }
  }, [searchByQuery, query, map]);

  const searchNearby = (map, center) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: "10000",
      type: ["restaurant"],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  };

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map
      style={{
        borderRadius: "15px",
        width: "calc(100% - 360px)",
        height: "calc(100% - 40px)",
      }}
      className="map"
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      onClick={onMapClicked}
      zoom={15}
      {...props}
    >
      {restaurants.map((restaurant) => (
        <Marker
          onClick={onMarkerClick}
          key={restaurant.place_id}
          name={restaurant.name}
          info={restaurant.formatted_address || restaurant.vicinity}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        ></Marker>
      ))}

      <InfoWindow
        visible={details.showingInfoWindow}
        position={details.position}
      >
        <div style={{ maxWidth: 240 }}>
          <Name>{details.selectedPlace?.name}</Name>
          <Info>{details.selectedPlace?.info}</Info>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: "pt-BR",
})(MapWindow);
