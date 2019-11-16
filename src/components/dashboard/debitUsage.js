import React, { PropTypes } from "react";
import Paper from "material-ui/Paper";
import { ResponsiveContainer } from "recharts";
import GlobalStyles from "../../styles";
import {typography} from "material-ui/styles";
import {amber600, amber500, white, black} from "material-ui/styles/colors";
import Arrow from "material-ui/svg-icons/navigation/arrow-forward";
import InfoBox from "./InfoBox";

const debitUsage = props => {
  const styles = {
    paper: {
      minHeight: 344,
      color: white,
      backgroundColor: white,
    },
    legend: {
      paddingTop: 20
    },
    pieChartDiv: {
      textAlign: "center"
    },
    header: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      color: black,
      backgroundColor: white,
      padding: 10
    },
    iconSpan: {
      // float: "left",
      height: 90,
      width: 90,
      textAlign: "center",
      backgroundColor: white
    },
    icon: {
      height: 48,
      width: 48,
      marginTop: 20,
      maxWidth: "100%"
    },
    affichageDebit: {
      paddingTop: '2em',
    },
  };

  return (
    <Paper style={styles.paper}>
      <div style={styles.header}>Utilisation du débit</div>

      <div style={GlobalStyles.clear} />

      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-6" style={styles.affichageDebit}>
          <div style={styles.pieChartDiv}>
            <ResponsiveContainer>
              <InfoBox
                Icon={Arrow}
                debit={"montant"}
                color={amber600}
                title="Débit montant"
                value="124 MB/S"
              />
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6" style={styles.affichageDebit}>
          <div style={styles.pieChartDiv}>
            <ResponsiveContainer>
              <InfoBox
                Icon={Arrow}
                debit={"descendant"}
                color={amber600}
                title="Débit descendant"
                value="1.2 GB/S"
              />
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Paper>
  );
};

debitUsage.propTypes = {
  data: PropTypes.array
};

export default debitUsage;
