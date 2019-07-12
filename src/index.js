import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import GTM from './gtm';
import Amplitude from './amplitude';
import Mixpanel from './mixpanel';
import Segment from './segment';
import Poeditor from './poeditor';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    }

  }



  render() {

    return (
      <Router>

       <ul>
          <li><Link to="/gtm">Google Tag Manager</Link></li>
          <li><Link to="/amplitude">Amplitude</Link></li>
          <li><Link to="/mixpanel">Mixpanel</Link></li>
          <li><Link to="/segment">Segment</Link></li>
          <li><Link to="/poeditor">Poeditor</Link></li>
        </ul>

        <Route exact path="/" component={App} />
        <Route path="/gtm" component={GTM} />
        <Route path="/amplitude" component={Amplitude} />
        <Route path="/mixpanel" component={Mixpanel} />
        <Route path="/segment" component={Segment} />
        <Route path="/poeditor" component={Poeditor} />
      </Router>
    )
  }
}

export default IndexPage;

ReactDOM.render(<IndexPage />, document.getElementById('root'));
