import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setRestaurantId } from "../../reducers/modules/restaurants";

import { Container, Skeleton } from "./styles";

import ListItem from "../ListItem";

import Preview from "./preview.jpg";

const List = () => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);
  const [placeId, setPlaceId] = useState(null);

  useEffect(() => {
    if (placeId) {
      dispatch(setRestaurantId(placeId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeId]);

  return (
    <Container>
      {restaurants.length > 0 ? (
        restaurants.map((restaurant) => (
          <ListItem
            key={restaurant.place_id}
            name={restaurant.name}
            stars={restaurant.rating || 0}
            info={restaurant.formatted_address || restaurant.vicinity}
            photo={restaurant.photos ? restaurant.photos[0].getUrl() : Preview}
            onClick={() => {
              setPlaceId(restaurant.place_id);
            }}
          />
        ))
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </Container>
  );
};

export default List;
