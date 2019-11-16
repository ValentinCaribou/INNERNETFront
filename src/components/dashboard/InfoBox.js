import React, { PropTypes } from "react";
import Paper from "material-ui/Paper";
import { white, grey800, red500, green800 } from "material-ui/styles/colors";
import { typography } from "material-ui/styles";

class InfoBox extends React.Component {
  render() {
    const { color, title, value, Icon, debit } = this.props;

    const styles = {
      paper: {
        boxShadow: 'none',
      },
      content: {
        textAlign: 'center',
        paddingBottom: 10,
      },
      number: {
        display: "block",
        fontWeight: typography.fontWeightMedium,
        fontSize: 18,
        color: grey800
      },
      text: {
        fontSize: 20,
        fontWeight: typography.fontWeightLight,
        color: grey800
      },
      iconSpan: {
        textAlign: "center",
      },
      iconRed: {
        height: 48,
        width: 48,
        marginTop: 10,
        marginBottom: 10,
        transform: 'rotate(90deg)',
        fill: red500,
        maxWidth: "100%"
      },
      iconGreen: {
        height: 48,
        width: 48,
        marginTop: 10,
        marginBottom: 10,
        transform: 'rotate(-90deg)',
        fill: green800,
        maxWidth: "100%"
      }
    };

    let style;
    if (debit === "montant"){
      style = styles.iconGreen;
    } else {
      style = styles.iconRed;
    }

    return (
      <Paper style={styles.paper}>
        <div style={styles.content}>
          <div style={styles.iconSpan}>
            <Icon color={white} style={style} />
          </div>
          <span style={styles.text}>{title}</span>
          <span style={styles.number}>{value}</span>
        </div>
      </Paper>
    );
  }
}

InfoBox.propTypes = {
  Icon: PropTypes.any, // eslint-disable-line
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string
};

export default InfoBox;
