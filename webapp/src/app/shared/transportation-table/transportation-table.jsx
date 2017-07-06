import React, { Component } from 'react'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import ListDialog from '../list-dialog'

export default class TransformationTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listIndex: null,
      origin: '',
      destination: '',
    }
  }

  componentWillMount() {
    this.props.doUpdateTable(this.props.origin)
  }

  componentWillUpdate(nextProps, nextState) {
    if(this.props.fromDate !== nextProps.fromDate ||
       this.props.toDate !== nextProps.toDate) {
      this.props.doUpdateTable(this.props.origin)
    }
    if(nextProps.newDelivery) {
      this.props.doChangeNewDelivery(false)
      this.props.doUpdateTable(this.props.origin)
    }
  }

  handleList = (index, origin, destination) => {
    this.setState({ listIndex: index, origin, destination })
    this.props.doShowListDialog(true)
  }

  render() {
    const noContent = this.props.tableItems.length === 0;

    const styles = {
      table: { fontWeight: 'bold', color: '#2F4F4F'},
      paper: { width: '90%', margin: 'auto', padding: '2em', maxHeight: '65vh', overflowY: 'auto'},
    };

    return (
      <Paper className="paper-table" style={styles.paper} zDepth={2} >
        { noContent && <h4>Não há resultados</h4> }

        { !noContent &&
          <Table fixedHeader={true} selectable={false} >
            <TableHeader adjustForCheckbox={false} displaySelectAll={false} fixedHeader={true} >
              <TableRow >
                <TableHeaderColumn className="col-none row-center" style={styles.table}>ID</TableHeaderColumn>
                <TableHeaderColumn className="row-center" style={styles.table}>Data</TableHeaderColumn>
                <TableHeaderColumn className="col-none" style={styles.table}>Origem</TableHeaderColumn>
                <TableHeaderColumn style={styles.table}>Destino</TableHeaderColumn>
                <TableHeaderColumn className="row-center" style={styles.table}>Carga</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} > {this.props.tableItems.map((item, k) =>
              <TableRow key={k} >
                <TableRowColumn className="col-none row-center">{item.tracker}</TableRowColumn>
                <TableRowColumn className="row-center">{new Date(item.created_at).toLocaleDateString('pt-BR')}</TableRowColumn>
                <TableRowColumn className="col-none">{item.source.departament_name}</TableRowColumn>
                <TableRowColumn>{item.destination.departament_name}</TableRowColumn>
                <TableRowColumn className="row-center">
                  <RaisedButton
                    className="btn-load-history"
                    label="Lista"
                    backgroundColor="#008372"
                    onTouchTap={() => this.handleList(k, item.source.departament_name, item.destination.departament_name)} />
                </TableRowColumn>
              </TableRow>
            )}; </TableBody>
          </Table>
        }
      <ListDialog
        index={this.state.listIndex}
        origin={this.state.origin}
        destination={this.state.destination} />
      </Paper>
    );
  }
}

TransformationTable.PropTypes = {
  origin: React.PropTypes.string,
}
