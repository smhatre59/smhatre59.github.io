/*
All initialization variables declared in this block
*/
import React from 'react';
import {render} from 'react-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimePicker from 'material-ui/TimePicker';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
var injectTapEventPlugin = require("react-tap-event-plugin");
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
injectTapEventPlugin();
//BigCalendar plugin requires localizer which is defined in here
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

/*
Header Component contains header dom
*/
class Header extends React.Component {
  render () {
    return (
      <div>
        Header
      </div>
    );
  }
}

/*
Main Component is parent container of all components
*/
class Main extends React.Component {
  // initial state variables are defined here
  constructor(props){
    super(props);
    var timearray=[];
    timearray.push(
      <div>
        In Time:
        <TimePicker
        hintText="12hr Format"
        onChange={(event, date) => this.setState({intime:date})}
        />
        Out Time:
        <TimePicker
        hintText="12hr Format"
        onChange={(event, date) => this.setState({outtime:date})}
        />
      </div>
    )
      this.state={
            myEventsList:[
              {
          'title': 'All Day Event',
          'allDay': false,
          'start': new Date("Sep 13 2016 10:13:00"),
          'end': new Date("Sep 13 2016 11:13:00")
            }
          ],
          open: false,
          timearray:timearray,
          value:1,
          datepicked:"",
          intime:"",
          outtime:""
        }
  }
  /*
  function to show modal popup with TimePicker
  */
  dateSelected(slotInfo){
    this.setState({datepicked:slotInfo.start,open: true});
  }
  /*
  function to handle Submit
  Populate event on the date that is selected on calender
  */
  timeClose(){
    var eventlist= this.state.myEventsList;
    if(this.state.value==1){
      var date = this.state.datepicked.toString().substring(4,16);
      var intime=this.state.intime.toString().substring(16,24);
      var outtime=this.state.outtime.toString().substring(16,24);
      var startdate = date+intime;
      var enddate = date+outtime;
      // console.log("startdate",startdate," enddate",enddate);
      eventlist.push(
        {
        'title': 'Present',
        'allDay': false,
        'start': new Date(startdate),
        'end': new Date(enddate)
        }
      )
      this.setState({myEventsList:eventlist,open: false});
      // console.log("eventlist",this.state.myEventsList);
    }
    else{
      var absentdate = this.state.datepicked.toString().substring(4,15)
      console.log("datepicked",absentdate);
      eventlist.push(
        {
        'title': 'Absent',
        'allDay': true,
        'start':new Date(absentdate),
        'end': new Date(absentdate)
      }
      )
      this.setState({myEventsList:eventlist,open: false});
    }
  }
  /*
  function to display time picker if present value is selected
  else hide TimePicker
  */
  handlePresentChange(event, index, value){
    // console.log("handlePresentChange called");
    var self= this;
    if(value==1){
      var timearray=[];
      timearray.push(
        <div>
          In Time:
          <TimePicker
          hintText="12hr Format"
          onChange={(event, date) => self.setState({intime:date})}
          />
          Out Time:
          <TimePicker
          hintText="12hr Format"
          onChange={(event, date) => self.setState({outtime:date})}
          />
        </div>
      );
      this.setState({timearray,value});
    }
    else{
      this.setState({timearray:[],value});
    }
  }
  // main fxn which renders calender and other popups
  render () {
    var self=this;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.setState({open:false})}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this.timeClose()}
      />,
    ];
    return (
      <div>
          <BigCalendar
            events={this.state.myEventsList}
            selectable
            defaultDate={new Date()}
            onSelectSlot={(slotInfo) => this.dateSelected(slotInfo)}
          />
          <MuiThemeProvider>
              <Dialog
              title="Dialog With Actions"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              autoScrollBodyContent={true}
              >
              <DropDownMenu value={this.state.value} onChange={(event, index, value) => self.handlePresentChange(event, index, value)}>
                  <MenuItem value={1} primaryText="Present" />
                  <MenuItem value={2} primaryText="Absent" />
                </DropDownMenu>
              {this.state.timearray}
              </Dialog>
          </MuiThemeProvider>

      </div>
    );
  }
}

render(<Main/>, document.getElementById('app'));
