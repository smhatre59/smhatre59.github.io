import React from 'react';
import {render} from 'react-dom';
import {
  Button,
  Clearfix,
  Grid,
  Col,
  Image,
  Modal,
  Navbar,
  Nav,
  NavItem,
  OverlayTrigger,
  Popover,
  ProgressBar,
  Row,
  } from 'react-bootstrap';
var hosturl="";
class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <div className="flexdiv">
          <Image src={hosturl+"/assets/profile.png"} className="profile" rounded responsive/>
          <a href="#" className="headertitle">Portfolio</a>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#about">About</NavItem>
        <NavItem eventKey={2} href="#work">Work</NavItem>
        <NavItem eventKey={2} href="#contact">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
      </div>
    );
  }
}
class Page extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showModal:false,
      modalbody:[],
      modalheading:[],
    }
  }
  close() {
    // console.log("close called");
    this.setState({ showModal: false });
  }
  modalOpen(work){
    // console.log("work",work);
    var self = this;
    var modalheading=[];
    var modalbody=[];
    switch (work) {
      case "first":
       modalheading.push(
         <div><h2>Nodejs</h2></div>
       );
       modalbody.push(
         <div>
           Developed backend apis for mobile and web applications in nodejs
         </div>
       );
        self.setState({
          modalheading:modalheading,
          modalbody:modalbody,
          showModal:true
        })
        break;
        case "second":
         modalheading.push(
           <div><h2>Reactjs</h2></div>
         );
         modalbody.push(
           <div>
             Developed web app for video streaming app in reactjs.
           </div>
         );
          self.setState({
            modalheading:modalheading,
            modalbody:modalbody,
            showModal:true
          })
          break;
          case "third":
           modalheading.push(
             <div><h2>Reactnative</h2></div>
           );
           modalbody.push(
             <div>
               Developed hybrid app in react native for video streaming.
             </div>
           );
            self.setState({
              modalheading:modalheading,
              modalbody:modalbody,
              showModal:true
            })
            break;
            case "fourth":
             modalheading.push(
               <div><h2>Chef</h2></div>
             );
             modalbody.push(
               <div>
                 Developed build automation framework for automating android build creation.
               </div>
             );
              self.setState({
                modalheading:modalheading,
                modalbody:modalbody,
                showModal:true
              })
              break;
              case "fifth":
               modalheading.push(
                 <div><h2>Openstack</h2></div>
               );
               modalbody.push(
                 <div>
                   Developed custom dashboard for cloud deployment on remote workstation using openstack.
                 </div>
               );
                self.setState({
                  modalheading:modalheading,
                  modalbody:modalbody,
                  showModal:true
                })
                break;
                case "sixth":
                 modalheading.push(
                   <div><h2>Git repos</h2></div>
                 );
                 modalbody.push(
                   <div>
                     Developed sample git repos for react and nodejs at:<br/>
                   <a href="https://www.github.com/smhatre59" target="_blank">gitrepos</a>
                   </div>
                 );
                  self.setState({
                    modalheading:modalheading,
                    modalbody:modalbody,
                    showModal:true
                  })
                  break;
      default:

    }
  }
  render(){
    // console.log("modal value",this.state.showModal);
    var self=this;
    return(
      <div className="gridcontainer">
      <Grid className="grid">
    <Row className="show-grid">
      <a name="about"></a>
      <Col xs={12}  sm={12} md={6} className="about flexdiv">
        <h1>About</h1>
      </Col>
      <Col xs={12}  sm={12} md={6} className="aboutcontents aboutpagecontainer flexdiv">
        <table>
          <tr>
            <b>
              I am a software developer from India currently living in Navi Mumbai.
            </b>
          </tr>
          <tr>
            I finished my engineering in Computer Science from R.A.I.T.
            Starting with project internship in cloud computing and website designing,
            I entered into the industry as mobile applications developer. I am currently
            working in hybrid and native mobile application development.
          </tr>
          <tr>
            <b>
            To achieve the goal of making the web a better place I trust in teamwork, latest technology and intuition.
            </b>
          </tr>
          <tr>
            <b>
              Skills:
            </b>
            </tr>
            <tr>
                HTML,CSS,JS:
            </tr>
            <tr>
              <ProgressBar striped bsStyle="info" now={80} />
            </tr>
            <tr>
                ReactJS and ReactNative:
            </tr>
            <tr>
              <ProgressBar striped bsStyle="warning" now={70} />
            </tr>
            <tr>
              Nodejs
            </tr>
            <tr>
              <ProgressBar striped bsStyle="success" now={50} />
            </tr>
            <tr>
                Chef(Infrastructure automation),Docker and Openstack (Cloud deployment):
            </tr>
            <tr>
              <ProgressBar striped bsStyle="danger" now={40} />
            </tr>
            <tr>
                Android native:
            </tr>
            <tr>
              <ProgressBar striped bsStyle="info" now={60} />
            </tr>
            <tr>
                Apple tv(TVML & TVJS):
            </tr>
            <tr>
              <ProgressBar striped bsStyle="warning" now={70} />
            </tr>

        </table>
      </Col>
    </Row>

    <Row className="show-grid">
      <a name="work"></a>
      <Col xs={12}  sm={12} md={6} className="work flexdiv">
        <h1>
          Work
        </h1>
      </Col>
      <Col xs={12}  sm={12} md={6} className="workcontents  flexdiv">
        <table>
          <tr>
            <b>Projects:</b>
          </tr>
          <tr>
            <Grid>
              <Row>
                <Col xs={12}  sm={6} md={4}>
                  <div className="responsive-circle firstcircle" onClick={() => self.modalOpen("first")}>
                      <div className="circle-inner">Nodejs</div>
                    </div>
                </Col>
                <Col xs={12}  sm={6} md={4}>
                  <div className="responsive-circle secondcircle" onClick={() => self.modalOpen("second")}>
                      <div className="circle-inner">React</div>
                    </div>
                </Col>
                <Col xs={12}  sm={6} md={4}>
                  <div className="responsive-circle thirdcircle" onClick={() => self.modalOpen("third")}>
                      <div className="circle-inner">Reactnative</div>
                  </div>
                </Col>
              </Row>
              <Row className="gridrow">
                <Col xs={12}  sm={4} md={4}>
                  <div className="responsive-circle firstcircle" onClick={() => self.modalOpen("fourth")}>
                      <div className="circle-inner">Chef</div>
                  </div>
                </Col>
                <Col xs={12}  sm={4} md={4}>
                  <div className="responsive-circle secondcircle" onClick={() => self.modalOpen("fifth")}>
                      <div className="circle-inner">Openstack</div>
                  </div>
                </Col>
                <Col xs={12}  sm={4} md={4}>
                  <div className="responsive-circle thirdcircle" onClick={() => self.modalOpen("sixth")}>
                      <div className="circle-inner">Git Repos</div>
                  </div>
                </Col>
              </Row>
            </Grid>

          </tr>

        </table>
      </Col>
    </Row>

    <Row className="show-grid">
      <a name="contact"></a>
      <Col xs={12}  sm={12} md={6} className="contact flexdiv">
        <h1>
          Contact
        </h1>
      </Col>
      <Col xs={12}  sm={12} md={6} className="contactcontents flexdiv">
        <table>
          <tr>
            If you want to collaborate on a project with me or need my help on anything-
          </tr>
          <tr>
            you are welcome to contact me
          </tr>
          <tr>
            <h3>
              Saurabh Mhatre
            </h3>
          </tr>
          <tr>
            smhatre59@gmail.com
          </tr>
          <tr>
            <a href="https://www.linkedin.com/in/saurabh-mhatre" target='_blank' className="linkedinlink">
              <Image src={hosturl+"/assets/linkedin.png"} className="linkedin" responsive/>
            </a>
          </tr>
        </table>
      </Col>
    </Row>
  </Grid>
  <Modal show={this.state.showModal} onHide={self.close.bind(self)}>
          <Modal.Header closeButton>
            <Modal.Title>{self.state.modalheading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {self.state.modalbody}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={self.close.bind(self)}>Close</Button>
          </Modal.Footer>
        </Modal>

  </div>
    )
  }
}
class Main extends React.Component {
  render () {
    return (
      <div className="main">
        <Header />
        <Page />
      </div>
    );
  }
}

render(<Main/>, document.getElementById('app'));
