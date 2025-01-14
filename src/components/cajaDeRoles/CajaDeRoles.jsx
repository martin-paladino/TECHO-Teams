import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerHistorial } from "../../state/historialDeUsuario";
import { rolesListos } from '../../state/cargaDeRoles'
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { useParams } from "react-router-dom";
import "./CajaDeRoles.css";
import Skeleton from "@mui/material/Skeleton";

export const CajaDeRoles = () => {
  const rolesCargados = useSelector(({cargaDeRoles}) => cargaDeRoles);
  const { idPersona } = useParams();
  const dispatch = useDispatch();
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    dispatch(rolesListos(false));
    dispatch(obtenerHistorial(idPersona)).then(({ payload }) => {
      let arr = [];
      let obj = {};
      payload?.map((historia) => {
        const rol =
          historia.roles[historia.roles.length - 1] &&
          historia.roles[historia.roles.length - 1].nombreRol;
        if (historia.activo && historia.equipo.activo &&!obj[rol]) {
          obj[rol] = true;
          arr.push(rol);
        }
      });
      setRoles(arr);
      dispatch(rolesListos(true));
    });
  }, [idPersona]);

  return (
    <div className="caja">
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }} id="roles">
        {!rolesCargados
          ? [1, 2].map((n) => (
              <Skeleton
                key={n}
                sx={{ width: 120, height: 50, borderRadius: 5 }}
              />
            ))
          : roles.map((value, i) => (
              <ButtonBase id="ripple" key={i}>
                {value && <Chip label={value} color="primary" />}
              </ButtonBase>
            ))}
      </Box>
    </div>
  );
};