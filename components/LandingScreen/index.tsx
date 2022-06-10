import { Button, TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import { useFormik } from "formik";
import classes from "./landing-screen.module.scss";

export const LandingSubmitButton = withStyles(() => ({
  root: {
    color: "#ffffff",
    backgroundColor: "rgb(133, 68, 8)",

    "&:hover": {
      backgroundColor: "#ffffff",
      color: "rgb(133, 68, 8)",
      border: "rgb(133, 68, 8)",
    },
    "&:disabled": {
      backgroundColor: "#cccccc",
    },
  },
}))(Button);

const LandingScreen: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      what: "",
      who: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className={classes.landingScreen}>
        <p className={classes.landingScreen_heading}>Fledging Form</p>
        <form
          onSubmit={formik.handleSubmit}
          className={classes.landingScreen_form}
        >
          <p className={classes.landingScreen_form_say}>
            What u wanna say ?...
          </p>
          <TextField
            fullWidth
            variant="outlined"
            rows={3}
            multiline
            name="what"
            value={formik.values.what}
            onChange={formik.handleChange}
            required
          />
          <p className={classes.landingScreen_form_name}>Who ?...</p>
          <TextField
            variant="standard"
            name="who"
            value={formik.values.who}
            onChange={formik.handleChange}
            required
          />

          <LandingSubmitButton
            type="submit"
            variant="contained"
            className={classes.landingScreen_submit}
          >
            ADD
          </LandingSubmitButton>
        </form>
      </div>
    </>
  );
};
export default LandingScreen;
