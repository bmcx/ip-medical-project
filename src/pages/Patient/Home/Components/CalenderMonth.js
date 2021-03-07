import  {Component } from 'react';
import { __RouterContext }  from "react-router";


class CalendarMonth extends Component {
  render() {
    let data;
    if(this.props.calendarData){
      data = this.props.calendarData[0];
    }
    return (
      <div className="CalendarMonth">
        
        <div className="row">
          <div className="col-md-12">
            {data.weekdays.map(function(weekday, i){
              return <li key={i}>{weekday}</li>;
            })}
          </div>
        </div>
          {data.days.map(function(day, i){
          if(day > 0) return <li className="weekday" key={i} id={i}>{day} <span className="apptText">{data.appointments[i]}</span>
          </li>;
          else return <li key={i} className="emptyDay"></li>;
        })}
      </div>
    );
  }
}

export default CalendarMonth;