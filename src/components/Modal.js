import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

class Temp extends React.Component {
  constructor(props) {
    super(props);
    this.setComponentData = this.setComponentData.bind(this);
    this.state = {};
  }
  
  componentWillMount() {
    this.setComponentData({}, this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.setComponentData(this.props, nextProps)
  }

  setComponentData(props, nextProps) {      
    let newStateChanges = {};

    //////////////////////////////
    //////////////////////////////
    //////////////////////////////

    if (Object.keys(newStateChanges).length > 0)
      this.setState(newStateChanges);
  }

  render() {
    return (null);
  }
}

let styles = {
}

Temp = withStyles(styles)(Temp);
export default (Temp);
