import { Container, Card } from "@mui/material"
import ReserveButton from "./ReserveButton"
import CalendarPicker from "./CalendarPicker"
import ReservationConfirmation from "./ReservationConfirmation"
import PropTypes from 'prop-types'

const ReservationInfo = ({ onReserveClick }) => {
  return (
    <Container>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "rgba(15, 82, 185, 0.85)",
          boxShadow: 10,
          borderRadius: 1,
          border: 0.5,
          borderColor: "#1848a0",
          marginBottom: "1rem",
          padding: "1rem",
        }}
      >
        <CalendarPicker />
        <ReserveButton onReserveClick={ReservationConfirmation} />
      </Card>
    </Container>
  )
}

ReservationInfo.propTypes = {
  onReserveClick: PropTypes.func.isRequired,
};

export default ReservationInfo