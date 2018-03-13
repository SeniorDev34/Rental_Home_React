import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";

class DatesFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.startDate,
      endDate: this.props.endDate
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  componentDidMount() {}

  updateField(field) {
    return e => {
      this.setState({ [field]: e });
    };
  }

  handleClear() {
    this.setState({ startDate: "", endDate: "" });
  }

  handleApply() {
    this.props.updateFilter("dates", this.state);
    this.props.hideBox();
  }

  render() {
    return (
      <div className="dates-filter">
        <div className="dates-div">
          <span className="check-in">
            <DayPickerInput
              value={this.state.startDate}
              onDayChange={this.updateField("startDate")}
              classNames={{
                container: "date-input",
                overlayWrapper: "calendar-wrapper",
                overlay: "calendar"
              }}
              placeholder="Check In"
              dayPickerProps={{
                selectedDay: this.state.startDate,
                disabledDays: [
                  { before: new Date() },
                  { after: this.state.endDate }
                ]
              }}
            />
          </span>
          <span className="arrow">
            <i className="material-icons">trending_flat</i>
          </span>
          <span className="check-out">
            <DayPickerInput
              value={this.state.endDate}
              onDayChange={this.updateField("endDate")}
              classNames={{
                container: "date-input",
                overlayWrapper: "calendar-wrapper",
                overlay: "calendar"
              }}
              placeholder="Check Out"
              dayPickerProps={{
                selectedDay: this.state.startDate,
                disabledDays: [
                  { before: new Date() },
                  { before: this.state.startDate }
                ]
              }}
            />
          </span>
        </div>
        <div className="dates-filter-apply-clear">
          <div className="dates-filter-clear" onClick={this.handleClear}>
            Clear
          </div>
          <div className="dates-filter-apply" onClick={this.handleApply}>
            Apply
          </div>
        </div>
      </div>
    );
  }
}

export default DatesFilter;
