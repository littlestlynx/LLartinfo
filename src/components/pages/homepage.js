import React, { useState } from 'react';

// General Imports
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Modal from 'react-modal';

// Components
import TermsOfService from '../terms-of-service';
import ImageCarousel from '../general-components/ImageCarousel';

// Images
import IconImages from './../image-lists/icon-images';
import ReferenceSheetImages from './../image-lists/reference-sheet-images';
import HalfBodyImages from './../image-lists/halfbody-images';
import FullBodyImages from './../image-lists/fullbody-images';

export default function Homepage() {

  let subtitle;
  const classes = useStyles();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar position="relative" color="secondary">
          <Toolbar/>
        </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">

            <Typography 
              component="h1" 
              className="text-h2"
              variant="h2" 
              align="center" 
              color="textPrimary"
              gutterBottom
            >
              LittlestLynx Art and Commission Information
            </Typography>

            <div className={classes.heroButtons}>
              <Grid container spacing={1} justify="center">
                <Grid item>

                  <Button
                    onClick={openModal}
                    variant="outlined"
                    color="secondary" 
                  >
                    Terms of Service
                  </Button>

                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={modalStyles}
                    contentLabel="Example Modal"
                  >
                    <div className="modal-subtitle-container">
                      <h2
                        ref={_subtitle => (subtitle = _subtitle)}
                        className="modal-subtitle"
                      >
                        Terms of Service
                      </h2>
                    </div>

                    <TermsOfService />

                    <div className="modal-close-button">
                      <Button
                        onClick={closeModal}
                        variant="outlined"
                        color="secondary"
                      >
                        Close
                      </Button>
                    </div>

                  </Modal>

                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Typography variant="h6" align="center" gutterBottom>
          Note: Price varies on complexity of the character, or props desired.
        </Typography>

        <div className="art-section">
          <Typography variant="h4" align="center" gutterBottom>
            Icons: $20-$30
          </Typography>

          <div className="my-carousel">
            <ImageCarousel
              imageSet={IconImages}
            />
          </div>

          <Typography variant="h4" align="center" gutterBottom>
            Halfbody: $35-$50
          </Typography>

          <div className="my-carousel">
            <ImageCarousel
              imageSet={HalfBodyImages}
            />
          </div>

          <Typography variant="h4" align="center" gutterBottom>
            Fullbody: $50-$75
          </Typography>

          <div className="my-carousel">
            <ImageCarousel
              imageSet={FullBodyImages}
            />
          </div>

          <Typography variant="h4" align="center" gutterBottom>
            Reference Sheets: $50-$120
          </Typography>

          <div className="my-carousel">
            <ImageCarousel
              imageSet={ReferenceSheetImages}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>

        <Typography variant="h6" align="center" gutterBottom>
          Thank you!
        </Typography>

        <Typography 
          variant="subtitle1" 
          align="center" 
          color="textSecondary" 
          component="p"
        >
          Curious to see updates, wips, or other projects? Check out 
          <Link color="blue" href="https://t.me/LLfunzone">
          { } LLFunzone { }
          </Link>
          on telegram for my art channel.
        </Typography>

        <Copyright />
        
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

// All the nice copyright information you may want to put into it
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="blue" href="https://twitter.com/littlestlynx">
        LittlestLynx
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// Since this is a small thing I'm not going to gripe about inline styling
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "60vw"
  }
};