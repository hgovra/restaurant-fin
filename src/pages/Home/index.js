import { useState } from "react";
import { useSelector } from 'react-redux';

import { Container, SearchBar, Sidebar, Title } from "./styles";

import Carousel from "../../components/Carousel";
import List from "../../components/List";
import MapWindow from "../../components/MapWindow";

const Home = () => {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [placeId] = useState(null);
  const { restaurants } = useSelector(
    (state) => state.restaurants
  );

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      setQuery(value);
    }
  };

  return (
    <Container>
      <Sidebar>
        <Title>Restaurant Finder</Title>
        <SearchBar value={value} onKeyPress={handleKeyPress} onChange={handleChange} placeholder="Pesquisar..." />

        <Carousel restaurants={restaurants}></Carousel>

        <List restaurants={restaurants}></List>
      </Sidebar>

      <MapWindow query={query} placeId={placeId} /> 
    </Container>
  );
};

export default Home;
