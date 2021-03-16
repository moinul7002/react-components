import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SvgMore from "@material-ui/icons/ExpandMore";

class NestedTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: false,
    };

    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand = () => {
    this.setState({
      expand: !this.state.expand,
    });
  };

  render() {
    return (
      <div>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Month</TableCell>
                <TableCell>Total Working Days</TableCell>
                <TableCell>My Working Days</TableCell>
                <TableCell>Total Leave (days)</TableCell>
                <TableCell>Total Late (days)</TableCell>
                <TableCell>Overtime (hrs)</TableCell>
                <TableCell>Expand</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>February</TableCell>
                <TableCell>22</TableCell>
                <TableCell>21</TableCell>
                <TableCell>1</TableCell>
                <TableCell>3</TableCell>
                <TableCell>5</TableCell>
                <TableCell>
                  <IconButton onClick={this.handleExpand}>
                    <SvgMore />
                  </IconButton>
                </TableCell>
              </TableRow>
              {this.state.expand ? (
                <TableRow>
                  <TableCell colSpan="3">
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell>In_Time</TableCell>
                          <TableCell>Out_Time</TableCell>
                          <TableCell>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>28/02/2021</TableCell>
                          <TableCell>09:00</TableCell>
                          <TableCell>18:00</TableCell>
                          <TableCell>Ok</TableCell>
                        </TableRow>
                      </TableBody>
                      <TableBody>
                        <TableRow>
                          <TableCell>27/02/2021</TableCell>
                          <TableCell>09:30</TableCell>
                          <TableCell>18:15</TableCell>
                          <TableCell>Late</TableCell>
                        </TableRow>
                      </TableBody>
                      <TableBody>
                        <TableRow>
                          <TableCell>26/02/2021</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell>Absent</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
              ) : null}
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell>January</TableCell>
                <TableCell>20</TableCell>
                <TableCell>20</TableCell>
                <TableCell>0</TableCell>
                <TableCell>8</TableCell>
                <TableCell>15</TableCell>
                <TableCell>
                  <IconButton onClick={this.handleExpand}>
                    <SvgMore />
                  </IconButton>
                </TableCell>
              </TableRow>
              {this.state.expand ? (
                <TableRow>
                  <TableCell colSpan="3">
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell>In_Time</TableCell>
                          <TableCell>Out_Time</TableCell>
                          <TableCell>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>31/01/2021</TableCell>
                          <TableCell>09:00</TableCell>
                          <TableCell>18:00</TableCell>
                          <TableCell>Ok</TableCell>
                        </TableRow>
                      </TableBody>
                      <TableBody>
                        <TableRow>
                          <TableCell>30/01/2021</TableCell>
                          <TableCell>09:30</TableCell>
                          <TableCell>18:15</TableCell>
                          <TableCell>Late</TableCell>
                        </TableRow>
                      </TableBody>
                      <TableBody>
                        <TableRow>
                          <TableCell>29/01/2021</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell>Absent</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default NestedTable;
