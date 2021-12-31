import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./pizza.css";
import { Box, Button, Modal } from "@mui/material";
import { height } from "@mui/system";

function Pizza({ pizza }) {
  const [Quantity, setQuantity] = useState(1);
  const [Varient, setVarient] = useState("small");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    color: "black",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxheight: 400,
    minwidth: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="single_pizza sm-3">
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          className="pizza_img cursor-pointer"
          image={pizza.image}
          alt="green iguana"
          onClick={handleOpen}
        />
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="text-black"
            >
              <img src={pizza.image} />
            </Typography>
            <Typography id="modal-modal-description" sx={{}}>
              {pizza.description}
            </Typography>
            <button className="close_modal" onClick={handleClose}>
              Close
            </button>
          </Box>
        </Modal>
        <Typography
          gutterBottom
          variant="p"
          className="text-center"
          component="div"
        >
          {pizza.name}
        </Typography>
        <div className="select_choice">
          <div>
            <p>Varients</p>
            <select
              value={Varient}
              onChange={(e) => {
                setVarient(e.target.value);
                console.log(e.target.value);
              }}
            >
              {pizza.varients.map((varient) => {
                return <option value={varient}>{varient}</option>;
              })}
            </select>
          </div>
          <div>
            <p>Prices</p>
            <select
              value={Quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            >
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
          </div>
        </div>
        <CardActions className="price_details">
          <p className="price">Prices:{pizza.prices[0][Varient] * Quantity}</p>
          <button className="add_cart_btn">Add to cart</button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Pizza;
