import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../home/home'
import About from '../aboutUs/aboutUs'
import Contact from '../contactUs/contact'
import Start from '../start/start'
import Anniversary from '../occasions/Anniversary/anniversary'
import Christmas from '../occasions/christmas/christmas'
import Birthday from '../occasions/birthday/birthday'
import Customization from '../customization/customization'
import Valentine from '../occasions/valentine/Valentine'
import Admin from '../adminDashboard/Index'
import item from '../occasions/addNewItem'
import newItems from '../admin/addItems'
import Terms from '../legal/terms'
import Privacy from '../legal/privacy'
import shoppingPolicy from '../legal/shopping'

export default function main() {
  
    
        return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/start' component={Start} />
                <Route exact path='/ChristmasOccasions' component={Christmas} />
                <Route exact path='/AnniversaryOccasions' component={Anniversary} />
                <Route exact path='/loveOccasions' component={Valentine} />
                <Route exact path='/BirthdayOccasions' component={Birthday} />
                <Route exact path='/customization' component={Customization} />
                <Route exact path='/addNewItem' component={item} />
                <Route exact path='/addItems' component={newItems} />
                <Route exact path='/terms&conditions' component={Terms} />
                <Route exact path='/shoppingPolicy' component={shoppingPolicy} />
                <Route exact path='/privacy' component={Privacy} />
            </Switch>
        </>
    )
}
