import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game, Platform } from "../hooks/useGames";
import PlatFormIconList from "./PlatformIconList";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatFormIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatFormIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
