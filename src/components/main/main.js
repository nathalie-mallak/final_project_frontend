import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../home/home'
import About from '../aboutUs/aboutUs'
import Start from '../start/start'
import Anniversary from '../occasions/anniversary'
import Love from '../occasions/valentine'
import Christmas from '../occasions/christmas'
import Birthday from '../occasions/birthday'
import Customization from '../customization/customization'
import Admin from '../adminDashboard/Index'
import item from '../occasions/addNewItem'
import newItems from '../admin/addItems'

export default function main() {
  
    
        return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/start' component={Start} />
                <Route exact path='/ChristmasOccasions' component={Christmas} />
                <Route exact path='/AnniversaryOccasions' component={Anniversary} />
                <Route exact path='/loveOccasions' component={Love} />
                <Route exact path='/BirthdayOccasions' component={Birthday} />
                <Route exact path='/customization' component={Customization} />
                <Route exact path='/addNewItem' component={item} />
                <Route exact path='/addItems' component={newItems} />
            </Switch>
        </>
    )
}
