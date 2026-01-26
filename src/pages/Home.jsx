import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import "../i18n";
import { keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './home.scss';

// Animazione: parte piccolo e opaco, cresce e diventa visibile
const growIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Home = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <div className="home-hero">
        <img
          className="home-hero-img"
          src="https://static.wixstatic.com/media/b00006_628574cf16f548f1888442ac1d53afb2~mv2.jpg/v1/fill/w_1960,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b00006_628574cf16f548f1888442ac1d53afb2~mv2.jpg"
          alt="giannutri drone.jpg"
        />
        <div className="home-hero-overlay">
          <Typography variant="h2" align="center" className="home-hero-title">
            {t("home_title", "Appartamenti sull'acqua")} <br />
            {t("home_title", "per vacanze a Giannutri")}
          </Typography>
          <Typography variant="subtitle2" align="center" className="home-hero-sub">
            {t(
              "home_subtitle",
              "Soggiorni esclusivi sull’isola di Giannutri. Contatto diretto, senza intermediari."
            )}
          </Typography>
          <Button
            variant="contained"
            href="https://AquaViewgiannutri.wixsite.com/AquaView-giannutri"
          >
            {t("contact_us", "Contattaci")}
          </Button>
        </div>
      </div>
      <div className="home-welcome">
        <div className="home-welcome-content">
          <Typography variant="h5" align="center" className="home-welcome-title">
            {t("welcome_title", "Benvenuti ad AquaView Giannutri")}
          </Typography>
          <Typography variant="body1" align="center" className="home-welcome-body">
            {t(
              "welcome_title",
              "AquaView propone una selezione curata di appartamenti per vacanze sull’isola di Giannutri, ideali per chi cerca mare cristallino, tranquillità e un contatto autentico con la natura."
            )}
          </Typography>
          <Typography variant="body1" align="center" className="home-welcome-body">
            {t(
              "welcome_title",
              "Gestiamo direttamente le proprietà, offrendo un’esperienza semplice, trasparente e senza intermediazioni."
            )}
          </Typography>
        </div>
      </div>
      <div className="home-cards-section" ref={ref}>
        <Typography variant="h3" className="home-cards-title">
          I nostri appartamenti
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card className={`home-card${inView ? ' in-view' : ''}`}>
              <img
                src="https://static.wixstatic.com/media/b00006_6e02914d3bdb4c54a44c11985840245f~mv2.png/v1/fill/w_355,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/photo_5980969739435576629_y_edited_edite.png"
                alt="Terrazzo panoramico Appartamento La Manuela"
              />
              <CardContent className="home-card-content">
                <Typography variant="h6" align="center" fontWeight={700}>
                  AquaView 30
                </Typography>
                <ul>
                  <li>Terrazzo panoramico</li>
                  <li>8 posti letto</li>
                  <li>4 bagni</li>
                  <li>Vista mare</li>
                </ul>
              </CardContent>
              <CardActions className="home-card-actions">
                <Button variant="contained" href="#">
                  Scopri di più
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={`home-card${inView ? ' in-view' : ''}`}>
              <img
                src="https://static.wixstatic.com/media/b00006_040c6098b2024d069d2b203d647bd1e5~mv2.png/v1/fill/w_355,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b00006_040c6098b2024d069d2b203d647bd1e5~mv2.png"
                alt="Terrazzo panoramico Appartamento Reggiani"
              />
              <CardContent className="home-card-content">
                <Typography variant="h6" align="center" fontWeight={700}>
                  AquaView 60
                </Typography>
                <ul>
                  <li>Terrazzo panoramico</li>
                  <li>6 posti letto</li>
                  <li>Wifi</li>
                  <li>Condizionatore</li>
                </ul>
              </CardContent>
              <CardActions className="home-card-actions">
                <Button
                  variant="contained"
                  href="https://AquaViewgiannutri.wixsite.com/AquaView-giannutri/appartamento-reggiani"
                >
                  Scopri di più
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={`home-card${inView ? ' in-view' : ''}`}>
              <img
                src="https://static.wixstatic.com/media/b00006_6e02914d3bdb4c54a44c11985840245f~mv2.png/v1/fill/w_355,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/photo_5980969739435576629_y_edited_edite.png"
                alt="Terrazzo panoramico Appartamento La Manuela"
              />
              <CardContent className="home-card-content">
                <Typography variant="h6" align="center" fontWeight={700}>
                  AquaView 90
                </Typography>
                <ul>
                  <li>Terrazzo panoramico</li>
                  <li>7 posti letto</li>
                  <li>3 bagni</li>
                  <li>A due passi dal mare</li>
                </ul>
              </CardContent>
              <CardActions className="home-card-actions">
                <Button
                  variant="contained"
                  href="https://AquaViewgiannutri.wixsite.com/AquaView-giannutri/appartamento-la-manuela"
                >
                  Scopri di più
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div className="giannutri-section">
        <div style={{ flex: 1, minWidth: 280, marginRight: 32 }}>
          <Typography variant="h2" className="giannutri-title">
            L’isola di Giannutri
          </Typography>
          <div className="giannutri-bar" />
          <Button
            variant="contained"
            color="secondary"
            href="https://acquaviewgiannutri.wixsite.com/acquaview-giannutri/giannutri"
            className="giannutri-btn"
            endIcon={<ArrowForwardIcon />}
          >
            Scopri l'isola
          </Button>
        </div>
        <div style={{ flex: 2, minWidth: 280 }}>
          <Typography variant="h5" className="giannutri-subtitle">
            Un'isola fuori dal comune
          </Typography>
          <Typography variant="body1" className="giannutri-body">
            Giannutri è un’isola unica dell’Arcipelago Toscano, caratterizzata da mare limpido, natura protetta e un’atmosfera autentica e rilassata.
          </Typography>
          <Typography variant="body1" className="giannutri-body">
            È la destinazione ideale per chi desidera una vacanza lontana dal turismo di massa.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Home;
