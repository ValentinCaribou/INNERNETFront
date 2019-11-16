import React, { PropTypes } from "react";
import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import GlobalStyles from "../../styles";
import { typography } from "material-ui/styles";
import { white, teal500, teal400, teal600, grey700 } from "material-ui/styles/colors";
import Toggle from "material-ui/Toggle";
import { grey500 } from "material-ui/styles/colors";

const ParameterBox = props => {
  const styles = {
    paper: {
      backgroundColor: white,
      paddingBottom: 20
    },
    legend: {
      textAlign: "center",
      color: grey500,
      fontSize: "0.8rem",
      padding: "0 1rem",
      lineHeight: 1.3
    },
    header: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      color: white,
      backgroundColor: teal500,
      padding: 10
    },
    toggleDiv: {
      maxWidth: 300,
      padding: 20,
      margin: "0 auto"
    },
    toggleLabel: {
      color: grey700,
      fontWeight: 400
    },
    toggle: {
      margin: "0.7em 0",
      color: teal500
    },
    thumbSwitched: {
      backgroundColor: teal400,
    },
    trackSwitched: {
      backgroundColor: teal500,
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={{...styles.header}}>Données récoltées</div>

      <div style={GlobalStyles.clear} />

      <div>
        <div style={styles.toggleDiv}>
        <Toggle
            label="Age"
            name="Age"
            style={styles.toggle}
            defaultToggled={true}
            thumbSwitchedStyle={styles.thumbSwitched}
            trackSwitchedStyle={styles.trackSwitched}
            // onChange={this.handleChange}
            // defaultToggled={customer.membership}
            labelStyle={styles.toggleLabel}
          />
          <Toggle
            label="Data consommée"
            name="Data consommée"
            style={styles.toggle}
            defaultToggled={true}
            thumbSwitchedStyle={styles.thumbSwitched}
            trackSwitchedStyle={styles.trackSwitched}
            // onChange={this.handleChange}
            // defaultToggled={customer.membership}
            labelStyle={styles.toggleLabel}
          />
          <Toggle
            label="Horaires de connexion"
            name="Horaires de connexion"
            style={styles.toggle}
            thumbSwitchedStyle={styles.thumbSwitched}
            trackSwitchedStyle={styles.trackSwitched}
            // onChange={this.handleChange}
            // defaultToggled={customer.membership}
            labelStyle={styles.toggleLabel}
          />
          <Toggle
            label="Durée de connexion"
            name="Durée de connexion"
            style={styles.toggle}
            defaultToggled={true}
            thumbSwitchedStyle={styles.thumbSwitched}
            trackSwitchedStyle={styles.trackSwitched}
            // onChange={this.handleChange}
            // defaultToggled={customer.membership}
            labelStyle={styles.toggleLabel}
          />
          <Toggle
            label="statistiques de navigation"
            name="statistiques de navigation"
            style={styles.toggle}
            thumbSwitchedStyle={styles.thumbSwitched}
            trackSwitchedStyle={styles.trackSwitched}
            // onChange={this.handleChange}
            // defaultToggled={customer.membership}
            labelStyle={styles.toggleLabel}
          />
        </div>
        <p style={styles.legend}>Toutes les données récoltées sont anonymisées, pour plus d'informations, voir notre politique de confidentialité</p>
      </div>
    </Paper>
  );
};

ParameterBox.propTypes = {
  data: PropTypes.array
};

export default ParameterBox;
