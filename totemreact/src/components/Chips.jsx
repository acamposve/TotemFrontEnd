import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Recharge from "./Recharge";
import NewTag from "./NewTag";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Chips() {
  return (
    <BrowserRouter>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            {" "}
            <div className="card-block">
              <h4 className="card-title"><NavLink to="/new">Solicitar un nuevo Tag</NavLink></h4>
              <h6 className="card-subtitle text-muted">
                Seleccione esta opción para solicitar y recargar un nuevo tag
                para un nuevo vehiculo
              </h6>
              <img src="assets/img/start/new_tag.png" alt="" />
              <p className="card-text p-y-1">La recarga mínima es de $500.</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <div className="card-block">
              <h4 className="card-title">
                <NavLink to="/recharge">Recargar cuenta</NavLink>
              </h4>
              <h6 className="card-subtitle text-muted">
                Seleccione esta opción para recargar su cuenta para usar con sus
                tags
              </h6>

              <img
                src="assets/img/start/recharge_tag.png"
                style={{ width: 135, height: 116 }}
                alt=""
              />

              <p className="card-text p-y-1">La recarga mínima es de $500</p>
            </div>
          </Item>
        </Grid>
      </Grid>
      <Routes>
        <Route exact path="/recharge" element={<Recharge />} />
        <Route exact path="/new" element={<NewTag />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Chips;
