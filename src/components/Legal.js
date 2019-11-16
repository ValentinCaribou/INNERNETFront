import React, { PropTypes } from "react";
import { grey500 } from "material-ui/styles/colors";


class Legal extends React.Component {
  render() {
    const styles = {
      legal: {
        textAlign: "center",
        fontSize: "0.9rem",
        color: grey500
      }
    };

    return (
      <div styles={styles.legal}>
        <p>mentions légales | politique de confidentialité</p>
      </div>
    );
  }
}

Legal.propTypes = {
  styles: PropTypes.object
};

export default Legal;
