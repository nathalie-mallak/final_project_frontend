import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../home/home'
import Start from '../start/start'
import Happy from '../occasions/happy'
import Love from '../occasions/love'
import Sympathy from '../occasions/sympathy'
import Gratitude from '../occasions/gratitude'
import Customization from '../customization/customization'
import Admin from '../adminDashboard/Index'
import {CSSTransition ,TransitionGroup} from 'react-transition-group'
import './main.css'

export default function main() {
    return (
        <div className="">
        <Route render={({location}) =>(
              <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="page">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/admin' component={Admin} />
                        <Route exact path='/start' component={Start} />
                        <Route exact path='/sympathyOccasions' component={Sympathy} />
                        <Route exact path='/happyOccasions' component={Happy} />
                        <Route exact path='/loveOccasions' component={Love} />
                        <Route exact path='/gratitudeOccasions' component={Gratitude} />
                        <Route exact path='/customization' component={Customization} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>

        )}/>
      
        </div>
    )
}
