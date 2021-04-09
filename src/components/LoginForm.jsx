import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "40px auto",
    padding: "15px",
  },
  fields: {
    margin: "15px 0",
  },
}));

function LoginForm(props) {
  const classes = useStyles();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const handleClick = () => {
    console.log(id, pwd);
    setId("");
    setPwd("");
  };

  return (
    <Paper className={classes.root} elevation={10}>
      <TextField
        label="Identifiant"
        variant="outlined"
        fullWidth
        className={classes.fields}
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <TextField
        label="Mot de passe"
        variant="outlined"
        type="password"
        fullWidth
        className={classes.fields}
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <Button
        variant="contained"
        size="large"
        color="primary"
        fullWidth
        onClick={handleClick}
      >
        Connexion
      </Button>
    </Paper>
  );
}

export default LoginForm;
