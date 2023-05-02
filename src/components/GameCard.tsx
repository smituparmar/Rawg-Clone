import { Game } from "../hooks/useGames";
import { Image, Card, CardBody, Heading, Text } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatFormIconList platforms={game.parent_platforms.map(p => p.platform)}/>
      </CardBody>
    </Card>
  );
};

export default GameCard;
