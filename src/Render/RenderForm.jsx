import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import RenderInput from "./RenderInput.jsx";
import ErrorBoundary from "./../Forms/ErrorBoundary.jsx";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import LinearProgress from "@material-ui/core/LinearProgress";
import checkValidity from "./../Forms/FieldValidator.jsx";
import isFormValid from "./../Forms/FormValidSetter.jsx";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
  button: {
    fontSize: "14px",
    width: "100%",
    fontWeight: "400",
    textTransform: "none"
  },
  cardActions: {
    marginBottom: "10px",
    marginLeft: "10px"
  },
  paper: {
    width: "-webkit-fill-available",
    margin: "18px"
  }
};

class RenderForm extends Component {
  //constructor
  constructor(props) {
    super(props);

    this.state = {
      iForm: this.props.json,
      formIsValid: false,
      loading: false,
      alertopen: false,
      submitJson: "",
      btnDisable: false
    };
  }
  handleAlertClose = () => {
    this.setState({ alertopen: false });
  };

  submitHandler = event => {
    event.preventDefault();

    let didFormValid = isFormValid(this.state.iForm);
    this.setState({
      iForm: didFormValid.validatedForm,
      formIsValid: didFormValid.formValidity
    });

    const formData = {};
    for (let formElementIdentifier in this.state.iForm) {
      formData[formElementIdentifier] = this.state.iForm[
        formElementIdentifier
      ].value;
    }
    if (didFormValid.formValidity) {
      this.setState({ loading: true, btnDisable: true });
      setTimeout(() => {
        this.setState({
          loading: false,
          submitJson: JSON.stringify(formData),
          alertopen: true,
          btnDisable: false
        });
      }, 1000);
    }
  };

  inputChangedHandler = (event, inputIdentifier) => {
    //make a copy of iForm State
    const updatediForm = {
      ...this.state.iForm
    };
    // make a copy of Changed Element
    const updatedFormElement = {
      ...updatediForm[inputIdentifier]
    };
    //update changed value
    updatedFormElement.value = event.target.value;

    //check validity
    let getValidity = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    updatedFormElement.valid = getValidity.isValid;
    updatedFormElement.elementConfig.helperText = getValidity.errorText;
    //updated element's touched property
    updatedFormElement.touched = true;
    updatediForm[inputIdentifier] = updatedFormElement;

    //Checking The whole form Validity
    // let formIsValid = isFormValid(updatediForm);

    this.setState({ iForm: updatediForm });
  };

  render() {
    const { classes } = this.props;
    const formElementsArray = [];

    let Loader = this.state.loading ? (
      <LinearProgress color="secondary" />
    ) : null;

    for (let key in this.state.iForm) {
      formElementsArray.push({
        id: key,
        config: this.state.iForm[key]
      });
    }
    let form = (
      <Grid container spacing={24}>
        {formElementsArray.map(formElement => (
          <RenderInput
            key={formElement.id}
            touched={formElement.config.touched}
            errorValue={formElement.config.valid}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            inputAdornment={formElement.config.inputAdornment}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
      </Grid>
    );

    return (
      <Grid
        container
       // direction="row-reverse"
        justify="center"
        alignItems="center"
        style={{marginTop:"17px"}}
      >
        <Card className={classes.card} style={{ width: "50%" }}>
          {Loader}
          <CardContent>
            <ErrorBoundary>{form}</ErrorBoundary>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={this.submitHandler}
              disabled={this.state.btnDisable}
            >
              {this.props.buttonText}
            </Button>
          </CardActions>
        </Card>

        <Dialog
          open={this.state.alertopen}
          onClose={this.handleAlertClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          classes={{ paper: classes.paper }}
        >
          <DialogTitle id="alert-dialog-title">
            <Typography variant="body2">
              JRF updated Successfully.
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <code>{this.state.submitJson}</code>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleAlertClose} color="secondary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    );
  }
}

export default withStyles(styles)(RenderForm);
