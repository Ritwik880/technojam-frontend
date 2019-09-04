import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { aboutus, achievements, contactus, groups, homepage, mentorship, team } from './Pages/'
import Events from './Pages/Events';
import Resources from './Pages/Resources';
function Maincontent() {
    return(
        <div className="main-content" >
            <Switch>
                <Route exact path="/" component={homepage} />
                <Route exact path="/aboutus" component={aboutus} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/achievements" component={achievements} />
                <Route exact path="/contactus" component={contactus} />
                <Route exact path="/mentorship" component={mentorship} />
                <Route exact path="/team" component={team} />
                <Route exact path="/groups" component={groups} />
                <Route exact path="/resources" component={Resources} />
            </Switch>
        </div>
    );
}

export default Maincontent;