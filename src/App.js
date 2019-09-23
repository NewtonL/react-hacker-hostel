import React, {Component} from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';

class App extends Component {

    state = {
        guests: [],
        errors: []
    }

    guestText = "";
    dateText = "";

    handleGuestInfo = (event) => {
      this.guestText = event.target.value;
    }

    handleDateInfo = (event) => {
      this.dateText = event.target.value;
    }

    getMealsScheduleHandler = () => {
      const guestNames = this.guestText.split('\n');
      const bookingDates = this.dateText.split('\n');

      const guests = [];
      const errors = [];
      for(let i=0; i<guestNames.length; i++) {
        if (!guestNames[i] || !bookingDates[i]) continue;
        
        let error = false, startDate, endDate;
        [startDate, endDate] = bookingDates[i].split(' to ');
        if (!startDate || !endDate) {
          errors.push({name: guestNames[i]});
          continue;
        };

        let startYear, startMonth, startDay, endYear, endMonth, endDay;
        [startYear, startMonth, startDay] = startDate.split('-');
        [endYear, endMonth, endDay] = endDate.split('-');

        if (startYear.length !== 4 || endYear.length !== 4 || startMonth.length !== 2 || endMonth.length !== 2
          || startDay.length !== 2 || endDay.length !== 2) {
            error = true
        }

        const startDateNum = +(startYear + startMonth + startDay);
        const endDateNum = +(endYear + endMonth + endDay);

        if (endDateNum >= startDateNum && !error) {
          const newGuest = {
            name: guestNames[i],
            startDate: startDateNum, 
            endDate: endDateNum
          };
          guests.push(newGuest);
        } else {
          errors.push({name: guestNames[i]}); 
        }
      }

      this.setState({guests: guests, errors: errors});
    }

    render() {
        return (
            <div className="container-fluid">
                <center>
                    <h2>Menu scheduler</h2>
                </center>
                <div className="container">
                    <Bookings handleGuestInfo={this.handleGuestInfo} handleDateInfo={this.handleDateInfo} getMealsScheduleHandler={this.getMealsScheduleHandler}></Bookings>
                    <Error errors={this.state.errors}></Error>
                    <Meals guests={this.state.guests}></Meals>
                </div>
            </div>
        );
    }
}

export default App;