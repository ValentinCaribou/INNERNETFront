import React from "react";

class AboutPage extends React.Component {

  render() {
    const styles = {
      about: {
        display: "grid",
        justifyContent: "center",
      },
      title: {
        paddingTop: "50px",
        paddingBottom: "30px",
        textAlign: "center",
        fontSize: "36px"
      },
      version: {
        display: "flex",
        padding: "0px 50px",
        paddingBottom: "10px",
        paddingTop: "20px",
        justifyContent: "flex-start",
        fontSize: "24px",
        color: "darkcyan",
      },
      url: {
        display: "flex",
        padding: "0px 50px",
        justifyContent: "flex-start",
        fontSize: "20px",
        color: "darkcyan",
      },
      desc: {
        padding: "0px 50px",
        fontSize: "20px"
      }
    }
    return (
      <div style={styles.about}>
        <div style={styles.title}><b>Informations légales</b></div>

        <div style={styles.version}>Editeur</div>
        <div style={styles.url}>innernet.fr</div>

        <div style={styles.desc}>
          <p>RCS Poitiers 541 254 896 - Siège social : 5, rue Victor Hugo, 86 000 Poitiers N°de télephone : 07.77.34.84.67</p>
        </div>

        <div style={styles.version}>Hébergement</div>
        <div style={styles.url}>Innernet</div>

        <div style={styles.desc}>
          <p>Société anonyme au capital de 10 640 226 396 euros - RCS Poitiers 541 254 896 - Siège social : 5, rue Victor Hugo, 86 000 Poitiers N°de téléphone: 07.77.34.84.67</p>
        </div>

        <div style={styles.version}>Service Client</div>

        <div style={styles.desc}>
          <p>Internet InnerNet - service client 86 000 Poitiers</p>
        </div>

        <div style={styles.version}>Directeur de la publication</div>

        <div style={styles.desc}>
          <p>Loïc Losson</p>
        </div>
      </div>
    );
  }
}

export default AboutPage;
