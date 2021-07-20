import styled from "styled-components";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const CardContainer = styled.div`
  display: flex;
  padding: 2vh 2vw;
  width: 30em;
  flex-direction: column;
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    cover: {
      width: 133,
      height: 196,
      marginRight: 25,
      marginBottom: 60,
    },

    expand: {
      fontSize: "13px",
      borderRadius: "5px",
      border: "1px solid",
      marginBottom: 20,
      width: "100%",
    },
    favorit: {
      marginLeft: "80px",
      marginTop: 20,
    },
    card: {
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    },
  })
);
