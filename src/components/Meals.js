import React, {Component} from 'react';

export default class Meals extends Component {
    render() {
        let meals = [];
        if (this.props.guests.length > 0) {
            for(let i=0; i<this.props.guests.length; i++) {
                const guest = this.props.guests[i];
                for(let date = guest.startDate; date <= guest.endDate; date++) {
                    meals.push({
                        name: guest.name,
                        time: date.toString() + '1'
                    })
                    meals.push({
                        name: guest.name,
                        time: date.toString() + '2'
                    })
                    meals.push({
                        name: guest.name,
                        time: date.toString() + '3'
                    })
                }
            }

            meals = meals.sort((a, b) => {
                return a.time - b.time;
            }).map((meal) => {
                const formattedDate = meal.time.substring(0, 4) + '-'
                + Number(meal.time.substring(4, 6)).toString() + '-'
                + meal.time.substring(6, 8);

                return <li key={meal.name+meal.time} className="morning">Breakfast for {meal.name} on {formattedDate}</li>
            });
        }

        return (
            <div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
                <ol id="list">
                    {meals}
                </ol>
            </div>
        );
    } 
}