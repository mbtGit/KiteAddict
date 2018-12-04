import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Link, Route, Switch } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionBasics from "views/Components/Sections/SectionBasics.jsx";
import SectionNavbars from "views/Components/Sections/SectionNavbars.jsx";
import SectionTabs from "views/Components/Sections/SectionTabs.jsx";
import SectionPills from "views/Components/Sections/SectionPills.jsx";
import SectionNotifications from "views/Components/Sections/SectionNotifications.jsx";
import SectionTypography from "views/Components/Sections/SectionTypography.jsx";
import SectionJavascript from "views/Components/Sections/SectionJavascript.jsx";
import SectionCarousel from "views/Components/Sections/SectionCarousel.jsx";
import SectionCompletedExamples from "views/Components/Sections/SectionCompletedExamples.jsx";
import SectionLogin from "views/Components/Sections/SectionLogin.jsx";
import SectionExamples from "views/Components/Sections/SectionExamples.jsx";
import SectionDownload from "views/Components/Sections/SectionDownload.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import indexRoutes from "routes/index.jsx";
import "assets/scss/material-kit-react.css?v=1.3.0";
import MainTable from "./components/MainTable";

var hist = createBrowserHistory();

class Container extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="KiteAddict"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{ height: 250, color: "white" }}
          {...rest}
        />

        <div id='guests'>
          <Parallax image={require("assets/img/bg5.jpg")}><div className={classes.container}><div className={classes.brand}><h1 className={classes.title}>Guests</h1></div></div></Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <MainTable/>
          </div>
        </div>


        <div id='professors'>
          <Parallax image={require("assets/img/bg5.jpg")}><div className={classes.container}><div className={classes.brand}><h1 className={classes.title}>Professors</h1></div></div></Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            Professors
          </div>
        </div>


        <div id='services'>
          <Parallax image={require("assets/img/bg5.jpg")}><div className={classes.container}><div className={classes.brand}><h1 className={classes.title}>Services</h1></div></div></Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            Services
          </div>
        </div>


        <div className={classNames(classes.main, classes.mainRaised)}>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route path={prop.path} key={key} component={prop.component} />;
            })}
          </Switch>
        </div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload />
        </div>
      </div>
    )
  }
}

Container = withStyles(componentsStyle)(Container);

ReactDOM.render(
  <Router history={hist}>
    <Container/>
  </Router>
  ,
  document.getElementById("root")
);