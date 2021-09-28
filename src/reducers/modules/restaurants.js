export const Types = {
  SET_RESTAURANTS: "restaurants/SET_RESTAURANTS",
  SET_RESTAURANT_ID: "restaurants/SET_RESTAURANT_ID",
};

const initialState = {
  restaurants: [],
  restaurantId: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    case Types.SET_RESTAURANT_ID:
      return { ...state, restaurantId: action.payload };
    default:
      return state;
  }
}

export function setRestaurants(restaurants) {
  return {
    type: Types.SET_RESTAURANTS,
    payload: restaurants,
  };
}

export function setRestaurantId(restaurantId) {
  return {
    type: Types.SET_RESTAURANT_ID,
    payload: restaurantId,
  };
}
