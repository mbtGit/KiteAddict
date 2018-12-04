import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from '@material-ui/core/Paper'; import {
  SearchState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  Toolbar,
  SearchPanel,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

class Temp extends React.Component {
  constructor(props) {
    super(props);
    this.setComponentData = this.setComponentData.bind(this);
    
    this.TableRow = (({ row, ...restProps }) => {
      const { selectedRow } = this.state;
      let isSelected = selectedRow && row.id == selectedRow.id;
      return (
        <Table.Row
          {...restProps}
          onClick={() => { this.setState({selectedRow: row}) }}
          style={{
            cursor: 'pointer',
            backgroundColor: isSelected ? '#0080ff25' : null
          }}
        />
    )}).bind(this);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ],
      rows: { 
        '1': { id: '1', name: 'aaaaaaaa', sex: 'ffffff', city: '111111', car: '?????' },
        '2': { id: '2', name: 'cccc', sex: 'mmfg', city: '1122221', car: '%%%%%' },
        '3': { id: '3', name: 'fgdf', sex: 'sdf', city: '55551', car: '?????' },
        '4': { id: '4', name: 'tui', sex: 'ffffff', city: '177771', car: '?????' },
        '5': { id: '5', name: 'bbbbb', sex: 'sdf', city: '33', car: '?****' },
        '6': { id: '6', name: 'dfg', sex: 'fffsfff', city: '2456', car: '?@@@' },
        '7': { id: '7', name: 'dgb', sex: 'sd', city: '4', car: '?(((?' },
        '8': { id: '8', name: 'sdfehet', sex: 'aa', city: '666', car: '?##?' },
        '9': { id: '9', name: 'xxxxxxxxx', sex: 'ad', city: '566', car: '^' },
      }
    };
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
    const { rows, columns } = this.state;
    let rowsArray = Object.values(rows);
    return (
      <Paper>
        <Grid rows={rowsArray} columns={columns}>
          <SearchState/>
          <IntegratedFiltering />
          <Table rowComponent={this.TableRow}/>
          <TableHeaderRow />
          <Toolbar />
          <SearchPanel />
        </Grid>
      </Paper>
    );
  }
}

let styles = {
}

Temp = withStyles(styles)(Temp);
export default (Temp);
