import React, { PropTypes } from "react";
import { Link } from "react-router";
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
        <Link to="/info"><p>mentions légales | politique de confidentialité</p></Link>
      </div>
    );
  }
}

Legal.propTypes = {
  styles: PropTypes.object
};

export default Legal;
