import { Container, Image, Info, Name, Rating } from "./styles";

const ListItem = ({ name, stars, info, photo, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Name>{name}</Name>
      <Rating
        count={5}
        value={Number(stars)}
        size={24}
        edit={false}
        activeColor="#6ea5d8"
        color="#CCC"
      />
      <Info>{info}</Info>

      <Image photo={photo} />
    </Container>
  );
};

export default ListItem;
