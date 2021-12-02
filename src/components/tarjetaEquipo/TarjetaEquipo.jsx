import Chip from "@mui/material/Chip";
import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import "./TarjetaEquipo.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const TarjetaEquipo = ({ nombre, inicio, final, roles }) => {
  return (
    <div className="grid-equipo">
      <h2 className="actividad-equipo">{nombre}</h2>
      <p className="actividad-fechas">{`${inicio}`}</p>
      <div className="roles-equipo">
        <span id='roles-titulo'>
					Roles:
				</span>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
          id="lista-roles"
        >
          {roles.map((value) => (
            <ButtonBase id="ripple" key={value}>
              <Chip label={value} color="primary" />
            </ButtonBase>
          ))}
        </Box>
      </div>
			<ArrowForwardIosIcon id='flecha-equipo'/>
    </div>
  );
};