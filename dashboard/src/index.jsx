import React from 'react';
import {render} from 'react-dom';
import Search from 'react-search';
import moment from 'moment';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
import DropDownMenu from 'material-ui/DropDownMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
class Header extends React.Component{
  render() {
    return(
      <div id="header" className="header">
        <div id="headerlogo" className="headerlogo">
          Sample App
        </div>
        <div id="rightheader" className="rightheader">
          <div id="offers" className="offerzone">Offerzone</div>
          <div id="contactus" className="contactus">Contact Us</div>
          <div id="profile" className="profile">
            <div id="profilepic" className="profilepic"></div>
            <div id="profilename" className="profilename">Welcome Saurabh</div>
          </div>
        </div>
      </div>
    )
  }
}
class LeftMenu extends React.Component{
  onLeftClick(value){
    console.log("value",value);
  }
  render(){
    return(
      <div id="leftmenu" className="leftmenu">
        <ul className="mtree transit">
           <li>
             <a onClick={() => this.onLeftClick("dashboard")} href="#">Dashboard</a>
             <ul>
               <li><a onClick={() => this.onLeftClick("dashboard")} href="#">My Payments</a></li>
             </ul>
           </li>
           <li><a href="#">Rewards</a>
             <ul>
               <li><a href="#">PayUMoney Points</a></li>
             </ul>
           </li>
           <li><a href="#">Reward Catalog</a>
           </li>
           <li><a href="#">My Bills</a>
             <ul>
               <li><a href="#">My Bills</a></li>
             </ul>
             <ul>
               <li><a href="#">Find Billers</a></li>
             </ul>
           </li>
           <li><a href="#">Stored Card</a>
           </li>
           <li><a href="#">Refferal Program</a>
             <ul>
               <li><a href="#">Invite Friends</a></li>
             </ul>
             <ul>
               <li><a href="#">Refferal Rewards</a></li>
             </ul>
           </li>
           <li><a href="#">My Profile</a>
             <ul>
               <li><a href="#">User Profile</a></li>
             </ul>
             <ul>
               <li><a href="#">Address Details</a></li>
             </ul>
             <ul>
               <li><a href="#">Reset Password</a></li>
             </ul>
           </li>
        </ul>
      </div>
    )
  }
}

var initialdata=[{
  "date":"10/09/2016",
  "mname":"John",
  "moid":"1233",
  "pid":"2553",
  "amount":"1200",
  "paystatus":"completed",
  "actions":"cancel"
},
{
  "date":"11/09/2016",
  "mname":"Anthony",
  "moid":"1243",
  "pid":"2556",
  "amount":"1500",
  "paystatus":"refunded",
  "actions":"cancel"
},
{
  "date":"28/12/1996",
  "mname":"Bethany",
  "moid":"1245",
  "pid":"2566",
  "amount":"1600",
  "paystatus":"partially refunded",
  "actions":"cancel"
},
{
  "date":"29/10/1998",
  "mname":"Jacob",
  "moid":"1343",
  "pid":"3556",
  "amount":"2000",
  "paystatus":"initiated",
  "actions":"cancel"
},
{
  "date":"09/09/2006",
  "mname":"Kristen",
  "moid":"1263",
  "pid":"7556",
  "amount":"1600",
  "paystatus":"completed",
  "actions":"cancel"
},
{
  "date":"19/02/1996",
  "mname":"Anthony",
  "moid":"1343",
  "pid":"7556",
  "amount":"1800",
  "paystatus":"refunded",
  "actions":"cancel"
},
{
  "date":"29/10/1998",
  "mname":"Jacob",
  "moid":"6243",
  "pid":"9556",
  "amount":"7500",
  "paystatus":"refunded",
  "actions":"cancel"
}];

var keys=['mname'];

class App extends React.Component {
  onLeftClick(){
    console.log("selection");
  }
  constructor(props){
    super(props);

    var tdata=[];
    for(var i=0;i<initialdata.length;i++){
      tdata.push(
        <tr className="trow">
          <td className="tdate">{initialdata[i].date}</td>
          <td className="tmername">{initialdata[i].mname}</td>
          <td className="ttmerorderid">{initialdata[i].moid}</td>
          <td className="tpaymentid">{initialdata[i].pid}</td>
          <td className="tamount">{initialdata[i].amount}</td>
          <td className="tpaymentstatus">{initialdata[i].paystatus}</td>
          <td className="tactions">{initialdata[i].actions}</td>
        </tr>
      )
    }
    this.state={
      tdata:tdata,
      value:1,
      open:false,
      toDate:null,
      fromDate:null
    }
  }
  searchMerchantName(e, results){
    // console.log("searchresults",e.target.value," ",results);
    var tdata=[];
    if(results.length==0){
      if(e.target.value.length>1){
        console.log("no results found");
        tdata.push(
          <tr className="trow">
            <td className="noresults">
              <div>No results found</div>
            </td>
          </tr>
        )
        this.setState({tdata:tdata});
      }
      else{
        for(var i=0;i<initialdata.length;i++){
        // console.log("in empty array",initialdata.length,i);
        tdata.push(
          <tr className="trow">
            <td className="tdate">{initialdata[i].date}</td>
            <td className="tmername">{initialdata[i].mname}</td>
            <td className="ttmerorderid">{initialdata[i].moid}</td>
            <td className="tpaymentid">{initialdata[i].pid}</td>
            <td className="tamount">{initialdata[i].amount}</td>
            <td className="tpaymentstatus">{initialdata[i].paystatus}</td>
            <td className="tactions">{initialdata[i].actions}</td>
          </tr>
        )
        }
        this.setState({tdata:tdata});
      }

    }
    else{
      for(var i=0;i<results.length;i++){
        tdata.push(
          <tr className="trow">
            <td className="tdate">{results[i].date}</td>
            <td className="tmername">{results[i].mname}</td>
            <td className="ttmerorderid">{results[i].moid}</td>
            <td className="tpaymentid">{results[i].pid}</td>
            <td className="tamount">{results[i].amount}</td>
            <td className="tpaymentstatus">{results[i].paystatus}</td>
            <td className="tactions">{results[i].actions}</td>
          </tr>
        )
      }
      this.setState({
        tdata:tdata
      });
    }

  }
  handleDateChange(event, index, value){
    //console.log("hadle change", index, value);
    switch (value) {
      case 1:
      var tdata=[];
        for(var i=0;i<initialdata.length;i++){
        tdata.push(
          <tr className="trow">
            <td className="tdate">{initialdata[i].date}</td>
            <td className="tmername">{initialdata[i].mname}</td>
            <td className="ttmerorderid">{initialdata[i].moid}</td>
            <td className="tpaymentid">{initialdata[i].pid}</td>
            <td className="tamount">{initialdata[i].amount}</td>
            <td className="tpaymentstatus">{initialdata[i].paystatus}</td>
            <td className="tactions">{initialdata[i].actions}</td>
          </tr>
        )};
        this.setState({tdata:tdata});
        break;
      case 2:
      var tdata=[];
      var initcopy = JSON.parse(JSON.stringify(initialdata));
      initcopy.filter(function (item) {
          var tdate = moment(item["date"],"DD/MM/YYYY");
          if(moment().diff(tdate, 'days') == 0){
              tdata.push(
                <tr className="trow">
                  <td className="tdate">{item.date}</td>
                  <td className="tmername">{item.mname}</td>
                  <td className="ttmerorderid">{item.moid}</td>
                  <td className="tpaymentid">{item.pid}</td>
                  <td className="tamount">{item.amount}</td>
                  <td className="tpaymentstatus">{item.paystatus}</td>
                  <td className="tactions">{item.actions}</td>
                </tr>
              )
          }
          });
          this.setState({tdata:tdata});
        break;
      case 3:
      var tdata=[];
      var initcopy=JSON.parse(JSON.stringify(initialdata));
      initcopy.filter(function (item) {
          var tdate = moment(item["date"],"DD/MM/YYYY");
          var weekbefore = moment().clone().subtract(7, 'days').startOf('day');
          if(tdate.isAfter(weekbefore)){
              // console.log("date",tdate);
              tdata.push(
                <tr className="trow">
                  <td className="tdate">{item.date}</td>
                  <td className="tmername">{item.mname}</td>
                  <td className="ttmerorderid">{item.moid}</td>
                  <td className="tpaymentid">{item.pid}</td>
                  <td className="tamount">{item.amount}</td>
                  <td className="tpaymentstatus">{item.paystatus}</td>
                  <td className="tactions">{item.actions}</td>
                </tr>
              )
          }
          });
          this.setState({tdata:tdata});

        break;
      case 4:
        this.setState({open:true})
        break;
      default:

    }
    this.setState({value:value});
  }
  handletoDateChange(event, date){
    // console.log("todate",date);
    this.setState({toDate:date})
  }
  handlefromDateChange(event, date){
    this.setState({fromDate:date})
  }
  handleClose(){
    var self=this;
    // console.log("handle close clicked","dates",this.state.fromDate,this.state.toDate);
    if(this.state.fromDate != null && this.state.toDate != null){
      var fromDate = moment(this.state.fromDate);
      var toDate = moment(this.state.toDate);
      var tdata=[];
      // var initcopy=JSON.parse(JSON.stringify(initialdata));
      initialdata.filter(function (item) {
          var tdate = moment(item["date"],"DD/MM/YYYY");
          // console.log("outside date filter",tdate.isValid(),fromDate.isValid(),toDate.isValid());
          if(tdate.isAfter(fromDate) && tdate.isBefore(toDate)){
            // console.log("inside date filter",tdate,fromDate,toDate);
            tdata.push(
              <tr className="trow">
                <td className="tdate">{item.date}</td>
                <td className="tmername">{item.mname}</td>
                <td className="ttmerorderid">{item.moid}</td>
                <td className="tpaymentid">{item.pid}</td>
                <td className="tamount">{item.amount}</td>
                <td className="tpaymentstatus">{item.paystatus}</td>
                <td className="tactions">{item.actions}</td>
              </tr>
            )
          }
      });
      self.setState({tdata:tdata});
    }

    this.setState({open:false});
  }
  render () {
    const actions = [
          <FlatButton
              label="Ok"
              primary={true}
              keyboardFocused={true}
              onTouchTap={this.handleClose.bind(this)}
            />,
        ];

    var self=this;
    return (
      <div>
        <Header />
        <LeftMenu />
        <div id="rightcontainer" className="rightcontainer">
          <div id="rightcontent" className="rightcontent">
              <div className="righttitle">
              <h3>My payments</h3>
              <div className="datefilter">
                <MuiThemeProvider>
                  <DropDownMenu value={this.state.value} onChange={this.handleDateChange.bind(this)}>
                      <MenuItem value={1} primaryText="All transactions" />
                      <MenuItem value={2} primaryText="Today's Transaction" />
                      <MenuItem value={3} primaryText="Last 7 Days Transactions" />
                      <MenuItem value={4} primaryText="Custom Date" />
                    </DropDownMenu>
                </MuiThemeProvider>
                <MuiThemeProvider>
                <Dialog
                  title="Select Dates"
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={this.handleClose.bind(self)}
                >
                From
                <DatePicker
                  hintText="From"
                  mode="landscape"
                  value={this.state.fromDate}
                  onChange={this.handlefromDateChange.bind(self)}/>
                To
                <DatePicker
                  hintText="To"
                  mode="landscape"
                  value={this.state.toDate}
                  onChange={this.handletoDateChange.bind(self)}/>
                </Dialog>
                </MuiThemeProvider>
              </div>
              </div>
              <div className="paymentbox">
                <div className="paymentbox1"></div>
                <div className="paymentbox2"></div>
                <div className="paymentbox3">
                  <div className="paymenticon"></div>
                  <div className="righttext">PAYUMONEY OFFERS
                    <br/>
                    <div className="rightcoupon">0 Coupon</div>
                  </div>
                </div>
              </div>
              <div className="listing">
                <div className="heading">
                  <span className="headingicon"></span>
                  <span className="headingtext">Payments</span>
                </div>
                <div className="innerlisting">
                  <table className="listingtable" cellPadding="0" cellSpacing="0">
                    <tbody>
                      <tr className="theading">
                      <td className="tdate"><h6>Date</h6></td>
                      <td className="tmername">
                        <div className="tablesearchouter">
                          <div className="tsearchinner">
                          <span className="tsearchicon"></span>
                          <div className="inputbox">
                                <Search classPrefix="tmernameinput" placeholder='Merchant Name' items={initialdata} keys={keys} searchKey={'mname'} onChange={this.searchMerchantName.bind(this)}/>
                          </div>
                          </div>
                        </div>
                      </td>
                      <td className="tmerorderid"><h6>Merchant Order ID</h6></td>
                      <td className="tpaymentid">
                        <div className="tablesearchouter">
                          <div className="tsearchinner">
                          <span className="tsearchicon"></span>
                          <div className="inputbox">
                          <Search classPrefix="tmernameinput" placeholder='Payment ID' items={initialdata} keys={keys} searchKey={'pid'} onChange={this.searchMerchantName.bind(this)}/>
                          </div>
                          </div>
                        </div>
                      </td>
                      <td className="tamount"><h6>Amount</h6></td>
                      <td className="tpaymentstatus">
                        <div className="tablesearchouter">
                        <div className="tsearchinner">
                        <span className="tsearchicon"></span>
                        <div className="inputbox">
                          <Search classPrefix="tmernameinput" placeholder='Payment status' items={initialdata} keys={keys} searchKey={'paystatus'} onChange={this.searchMerchantName.bind(this)}/>
                        </div>
                        </div>
                      </div></td>
                    <td className="tactions"><h6>Actions</h6></td>
                      </tr>
                      {this.state.tdata}
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
