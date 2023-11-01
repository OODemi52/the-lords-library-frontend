import { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material"
import ReservationInfo from "./ReservationInfo";
import ReservationConfirmation from "./ReservationConfirmation";
import PropTypes from 'prop-types';


const ReservationDialog = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => { 
        setOpen(false);
    }
    
    const handleReserve = () => {
        onReserveClick();
    }
    
  return (
    <>
    <Button variant="contained" onClick={handleOpen}>
        Reserve
    </Button>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reservation Details</DialogTitle>
        <DialogContent>
            {
                onReserveClick === ReservationConfirmation ?
                <ReservationConfirmation /> :
                        <ReservationInfo />
            }
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>
                Cancel
            </Button>
            <Button onClick={handleReserve}>
                Confirm Reservation
            </Button>
        </DialogActions>
    </Dialog>
</>
  )
}

export default ReservationDialog