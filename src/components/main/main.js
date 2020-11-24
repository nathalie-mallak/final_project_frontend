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
import search from '../search/searchPage'

export default function main() {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/start' component={Start} />
                <Route exact path='/sympathyOccasions' component={Sympathy} />
                <Route exact path='/happyOccasions' component={Happy} />
                <Route exact path='/loveOccasions' component={Love} />
                <Route exact path='/gratitudeOccasions' component={Gratitude} />
                <Route exact path='/customization' component={Customization} />
                <Route exact path='/searchPage' component={search} />
            </Switch>
        </>
    )
}
