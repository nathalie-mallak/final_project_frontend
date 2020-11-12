import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../home/home'
import SignUp from '../signUp/signUp'
import Login from '../login/login'
import Happy from '../occasions/happy'
import Love from '../occasions/love'
import Gratitude from '../occasions/gratitude'
import Sympathy from '../occasions/sympathy'
import Customization from '../customization/customization'
import Header from '../header/header'




export default function main() {
    return (
        <div>
            <Header />

            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/signUp' component={SignUp} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/sympathy' component={Sympathy} />
                    <Route exact path='/happy' component={Happy} />
                    <Route exact path='/love' component={Love} />
                    <Route exact path='/gratitude' component={Gratitude} />
                    <Route exact path='/customization' component={Customization} />

                    {/* do we need a dynamic route? */}
                </Switch>
            </div>
        </div>
    )
}
