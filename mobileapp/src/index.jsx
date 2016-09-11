import React from 'react';
import {render} from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
class App extends React.Component {
  constructor(props){
    super(props);
    var maincontent = [];
    maincontent.push(
      <div className="slider">
        <OwlCarousel slideSpeed={300} navigation autoPlay >
          <div><img src="../assets/product1.png" alt="product"/></div>
          <div><img src="../assets/product2.png" alt="product"/></div>
          <div><img src="../assets/product3.png" alt="product"/></div>
        </OwlCarousel>
      </div>
    )
    this.state={
      maincontent:maincontent
    }
  }
  onmenuClick(item){
    // console.log(item);
    var maincontent=[];
    switch(item){
      case "Photos":
      maincontent.push(
        <div className="slider">
          <OwlCarousel slideSpeed={300} navigation autoPlay >
            <div><img src="../assets/product1.png" alt="product"/></div>
            <div><img src="../assets/product2.png" alt="product"/></div>
            <div><img src="../assets/product3.png" alt="product"/></div>
          </OwlCarousel>
        </div>
      )
      this.setState({
        maincontent:maincontent
      });
      break;
      case "News":
      console.log("news clicked");
      break;
      case "Videos":
      var videocontent=[];
      for(var i=0;i<4;i++){
        videocontent.push(
            <div className="jumbotron">
              <video width="100%" controls poster="../assets/poster.png"> 
                      <source src="../assets/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
        )
      }
      maincontent.push(
        <div>
          <div className="videotitlecontiner">
            <div className="videotitle">
              VIDEOS
            </div>
          </div>
          {videocontent}
        </div>
      )
      this.setState({maincontent})
      break;
    }
  }
  render () {
    return (
      <div>
        <div className="headermenu">
          <nav role="navigation" id="nav">
          <ul>
            <li><a href="#" onClick={() => this.onmenuClick("News")}>News</a></li>
            <li><a href="#" onClick={() => this.onmenuClick("Music")}>Music</a></li>
            <li><a href="#" onClick={() => this.onmenuClick("Videos")}>Videos</a></li>
          </ul>
        </nav>
        </div>
        <div className="headericon">
          <div className="headerlogo">
            LOGOGOGOGOGO
          </div>
        </div>
        <div className="lowermenu">
          <nav role="navigation" id="nav2">
          <ul>
            <li><a href="#">Tour</a></li>
            <li><a className="active" onClick={() => this.onmenuClick("Photos")} href="#">Photos</a></li>
            <li><a href="#">Store</a></li>
          </ul>
          </nav>
        </div>
        <div className="playbackcontainer">
          <div className="playicon">
            <img src="../assets/rewind.png" className="ordericonimg" />
          </div>
          <div className="playiconmain">
            <img src="../assets/play.png" className="ordericonimg" />
          </div>
          <div className="playicon">
            <img src="../assets/forward.jpeg" className="ordericonimg" />
          </div>
        </div>
        {this.state.maincontent}
        <div className="ordercontainer">
          <div className="orderbox">
            <div className="ordericon">
              <img src="../assets/basket.jpeg" className="ordericonimg" />
            </div>
            <div className="itunes">
              <a className="button" href="#">ORDER ON ITUNES</a>
            </div>
            <div className="physical">
            <a className="button" href="#">ORDER PHYSICAL</a>
            </div>
          </div>
        </div>
        <div className="sociallogin">
          <div className="socialcontainer">
              <div className="socialicon">
                <img src="../assets/fb.png" alt="fb" className="socialimg"/>
              </div>
              <div className="socialicon">
                <img src="../assets/twitter.png" alt="fb" className="socialimg"/>
              </div>
              <div className="socialicon">
                <img src="../assets/tumblr.png" alt="fb" className="socialimg"/>
              </div>
              <div className="socialicon">
                <img src="../assets/vimeo.png" alt="fb" className="socialimg"/>
              </div>
              <div className="socialsignup">
                <img src="../assets/signup.png" alt="fb" className="socialimg"/>
              </div>

          </div>
        </div>
        <div className="footer">
          <div className="socialicons">
          </div>
          <div className="footernotes">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </div>
          <div className="footerdesc">
            Labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation
            <br/>
            &copy; 2014 aliquip ex ea commodo consequat
          </div>
        </div>
      </div>
    )
  }
}

render(<App/>, document.getElementById('main'));
