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

export default function main() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/start' component={Start} />
                <Route exact path='/sympathyOccasions' component={Sympathy} />
                <Route exact path='/happyOccasions' component={Happy} />
                <Route exact path='/loveOccasions' component={Love} />
                <Route exact path='/gratitudeOccasions' component={Gratitude} />
                <Route exact path='/customization' component={Customization} />

                {/* do we need a dynamic route? yes */}
            </Switch>
        </div>
    )
}
