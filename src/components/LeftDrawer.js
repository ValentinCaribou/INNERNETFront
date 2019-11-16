import React, { PropTypes } from "react";
import Drawer from "material-ui/Drawer";
// import { spacing, typography } from "material-ui/styles";
import { grey800 } from "material-ui/styles/colors";
import MenuItem from "material-ui/MenuItem";
import { Link } from "react-router";
import Avatar from "material-ui/Avatar";
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import FontIcon from 'material-ui/FontIcon';

const LeftDrawer = props => {
  let { navDrawerOpen } = props;

  const styles = {
    logo: {
      maxWidth: "100%",
      height: "80px"
    },
    logoContainer: {
      textAlign: "center",
      margin: 0
    },
    menuItem: {
      color: "white",
      fontSize: 14
    },
    avatar: {
      div: {
        backgroundColor: grey800,
        padding: "15px 20px",
        height: "70px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center"
      },
      icon: {
        display: "block",
        marginRight: "1em",
        boxShadow: "0px 0px 0px 3px rgba(0,0,0,0.1)",
        height: "100%",
        width: "auto"
      },
      span: {
        paddingTop: 0,
        display: "block",
        color: "white",
        fontWeight: 400,
        fontSize: 16
      }
    },
    drawer: {
      color: "darkgrey",
      backgroundColor: "rgba(227, 231, 232, 0.63)",
      overflow: "auto"
    },
    menuItems: {
      display: "flex",
      flexDirection: "column",
      height: "calc(100% - 70px)"
    },
    signOut: {
      marginTop: "auto"
    }
  };

  function handleClick(event) {
    event.preventDefault();
    props.onLogoutClick();
  }

  return (
    <Drawer docked={true} open={navDrawerOpen} style={styles.drawer}>
      <div style={styles.avatar.div}>
        <Avatar
          src="assets/img/avatar0.png"
          size={50}
          style={styles.avatar.icon}
        />
        <span style={styles.avatar.span}>
          {props.username}

        </span>
      </div>
      <div style={styles.menuItems}>
        <div>
          {props.menus.map((menu, index) => (
            <MenuItem
              key={index}
              style={styles.menuItem}
              primaryText={menu.text}
              leftIcon={menu.icon}
              containerElement={<Link to={menu.link} />}
            />
          ))}
        </div>
        <div style={styles.signOut}>
        <figure style={styles.logoContainer}><img style={styles.logo} src="assets/img/INNERNET.png" alt="Innernet"/></figure>
          <MenuItem
            key={1}
            style={styles.menuItem}
            primaryText={props.signOut.text}
            leftIcon={props.signOut.icon}
            onClick={event => handleClick(event)}
            containerElement={<Link to={props.signOut.link} />}
          />

        </div>
      </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
  onLogoutClick: PropTypes.func.isRequired
};

export default LeftDrawer;
