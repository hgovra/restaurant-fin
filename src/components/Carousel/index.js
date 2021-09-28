import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setRestaurantId } from "../../reducers/modules/restaurants";

import { Container, Title, Player, Skeleton, Slide, Label } from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Preview from "./preview.jpg";

const Carousel = () => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);
  const [placeId, setPlaceId] = useState(null);

  useEffect(() => {
    if (placeId) {
      dispatch(setRestaurantId(placeId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeId]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    autoplaySpeed: 3500,
  };

  return (
    <Container>
      <Title>Na Sua Área</Title>

      {restaurants.length > 0 ? (
        <Player {...settings}>
          {restaurants.map((restaurant) => (
            <Slide
              key={restaurant.place_id}
              photo={
                restaurant.photos ? restaurant.photos[0].getUrl() : Preview
              }
            >
              <Label
                title={restaurant.name}
                onClick={() => {
                  setPlaceId(restaurant.place_id);
                }}
              >
                {restaurant.name}
              </Label>
            </Slide>
          ))}
        </Player>
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

export default Carousel;
