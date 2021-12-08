import Card from "@mui/material/Card";
import "../conformacion/Conformacion.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";

export default function CardInfoEquipo({state}) {
  
  return (
    <Card sx={{ width: 500 }}>
      <CardMedia
        component="img"
        height="340"
        image= {!state ?"http://www.columbia.edu.py/images/contenido/ID1351-I1-20190802-5d44f9b713eb4.jpg":"https:cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_640.png"}
        alt="green iguana"
      />
      <CardContent    sx={
            !state
              ? { color: "#212529" }
              : {
                  bgcolor: "#9e9e9e",
                  
                  color: "#e0e0e0",
                 
                }
          }>
        <Box
          id="CardInfogrid"
       
        >
          <div class="Title">
            <label>
              <p>Miembros:</p>
            </label>
          </div>
          <div>
            {!state ? <label>5</label>: <del><label>5</label> </del>}
          </div>
          <div class="Title">
            <label>
              <p>Area:</p>
            </label>
          </div>
          <div>
            {!state ? <label>Voluntariado</label>:<del><label>Voluntariado</label></del>}
          </div>
          <div class="Title">
            <label>
              <p>Pais:</p>
            </label>
          </div>
          <div>
            {!state?<label>Argentina</label>:<del><label>Argentina</label></del>}
          </div>
          <div class="Title">
            <label>
              <p>Sede:</p>
            </label>
          </div>
          <div>
           {!state?  <label>no se</label>:<del> <label>no se</label></del>}
          </div>
          <div class="Title">
            <label>
              <p>Territorio:</p>
            </label>
          </div>
          <div>
            {!state?<label>barrio</label>:<del><label>barrio</label></del>}
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}
