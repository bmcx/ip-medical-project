import { IconSendOutline, IconSpinner } from "../../../common/components/Icons";
import { firestoreConnect, isLoaded } from "react-redux-firebase";

import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import dateFns from "date-fns";
import { getFirestore } from "redux-firestore";

class CustomCalendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header mb-4 p-2 bg-gray-100 flex flex-row flex-wrap w-full items-center">
        <div
          className="flex-grow max-w-full justify-start text-left"
          onClick={this.prevMonth}
        >
          <div className="p-1 cursor-pointer inline-block">
            <svg
              width="2em"
              fill="gray"
              height="2em"
              viewBox="0 0 16 16"
              class="bi bi-arrow-left-circle"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fill-rule="evenodd"
                d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
              />
              <path
                fill-rule="evenodd"
                d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
              />
            </svg>
          </div>
        </div>
        <div className="flex-grow max-w-full justify-center text-center font-bold text-lg">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div
          className="flex-grow max-w-full justify-end text-right"
          onClick={this.nextMonth}
        >
          <div className="p-1 cursor-pointer inline-block">
            <svg
              width="2em"
              fill="gray"
              height="2em"
              viewBox="0 0 16 16"
              class="bi bi-arrow-right-circle"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
              />
              <path
                fill-rule="evenodd"
                d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          className="flex-grow max-w-full justify-center text-center"
          key={i}
        >
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return (
      <div className="uppercase font-normal px-2 border-b flex flex-row flex-wrap w-full">
        {days}
      </div>
    );
  }

  renderCells() {
    const { availability } = this.props;
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        let id = "";
        for (let avb of availability) {
          const tFrom = dateFns.parse(avb.timeFrom.toDate());
          if (dateFns.isSameDay(day, tFrom)) id = avb.id;
        }
        days.push(
          <div
            style={{ flexBasis: "14.28571%", width: "14.28571%" }}
            className={`flex-grow-0 relative h-24 border-r overflow-hidden cursor-pointer duration-300 ease-out hover:bg-gray-200 border border-gray-100 ${
              !dateFns.isSameMonth(day, monthStart)
                ? "opacity-40"
                : dateFns.isSameDay(day, selectedDate)
                ? "bg-blue-200"
                : ""
            }`}
            key={day}
            onClick={() =>
              this.onDateClick(id, dateFns.parse(cloneDay), id !== "")
            }
          >
            {id !== "" ? (
              <span className="px-2 py-1 text-sm absolute bottom-3 left-3 text-white font-bold bg-green-500 rounded-full ">
                Available ⮿
              </span>
            ) : null}
            <span className="absolute text-2xl top-3 right-3 font-bold text-gray-600">
              {formattedDate}
            </span>
            <span className="font-bold text-blue-500 opacity-10 text-8xl absolute -top-8 -right-2 ease-out">
              {formattedDate}
            </span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="flex flex-row flex-wrap w-full" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = (id, day, remove) => {
    const { myId } = this.props;
    const firestore = getFirestore();

    if (remove) {
      const ans = window.confirm(
        `Are you sure to remove availability from ${dateFns.format(
          day,
          "DD MMM YYYY"
        )}`
      );
      if (ans)
        firestore
          .collection("users")
          .doc(myId)
          .collection("availability")
          .doc(id)
          .delete();
    } else {
      const ans = window.confirm(
        `${dateFns.format(day, "DD MMM YYYY")} will be added as available`
      );
      if (ans)
        firestore
          .collection("users")
          .doc(myId)
          .collection("availability")
          .add({ timeFrom: day });
    }

    // this.setState({
    //   selectedDate: day,
    // });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1),
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1),
    });
  };

  render() {
    const { loaded } = this.props;

    if (!loaded)
      return (
        <div className="w-full h-full flex flex-row justify-center items-center">
          <div className="w-8 h-8 text-blue-500 mb-2 mt-8">
            <IconSpinner />
          </div>
        </div>
      );
    return (
      <div className="block relative w-full border border-gray-300 rounded-md overflow-hidden">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    availability: state.firestore.ordered.availability ?? [],
    loaded: isLoaded(state.firestore.ordered.availability),
    myId: state.firebase.auth.uid,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    if (props.myId)
      return [
        {
          collection: "users",
          doc: props.myId,
          subcollections: [{ collection: "availability" }],
          storeAs: "availability",
        },
      ];
    return [];
  })
)(CustomCalendar);
