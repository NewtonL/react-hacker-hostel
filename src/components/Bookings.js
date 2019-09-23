import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Bookings extends Component {
  handleGuestInfo = () => {};
  handleDateInfo = () => {};


    render() {
        this.handleGuestInfo = this.props.handleGuestInfo;
        this.handleDateInfo = this.props.handleDateInfo;
        return (
          <div className="row">
            <TextField
              className="col-md-6"
              multiline
              rows="4"
              placeholder="Enter the names (one name per line)"
              onChange={this.props.handleGuestInfo}
            />
            <TextField
              className="col-md-6"
              multiline
              rows="4"
              placeholder="Enter the date range for each name (one range per line)"
              onChange={this.props.handleDateInfo}
            />
            <Button variant="outlined" color="primary" className="block-center" onClick={this.props.getMealsScheduleHandler}>Get Meals Schedule</Button>
          </div>
      );
    }
}