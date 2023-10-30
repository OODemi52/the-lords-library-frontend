import { Container } from "@mui/material";
import PropTypes from "prop-types";
import SkeletonCard from "./SkeletonCard";

const SkeletonCards = ({ numOfCards }) => {

  const generateSkeletonCards = () => {
    const skeletonCards = [];
    for (let i = 0; i < numOfCards; i++) {
      skeletonCards.push(<><SkeletonCard key={i} /><br /><br /></>);
    }
    return skeletonCards;
  };

  return (
    <>
        <Container>
            {generateSkeletonCards()}
        </Container>
    </>
  );
};

SkeletonCards.propTypes = {
  numOfCards: PropTypes.number.isRequired,
};

export default SkeletonCards;
