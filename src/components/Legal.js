import React, { PropTypes } from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Menu from "material-ui/svg-icons/navigation/menu";
import { transparent, grey800, grey200 } from "material-ui/styles/colors";
// import FlatButton from "material-ui/FlatButton";


class Legal extends React.Component {
  render() {
    const style = {
      legal: {
        textAlign: "center",
        fontSize: "0.9rem"
      }
    };

    return (
      <div>
        <p styles={style.legal}>mentions légales | politique de confidentialité</p>
      </div>
    );
  }
}

// Header.propTypes = {
//   styles: PropTypes.object,
//   handleChangeRequestNavDrawer: PropTypes.func
// };

export default Legal;
