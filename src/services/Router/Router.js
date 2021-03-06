import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import NotFound from '../../pages/NotFound/NotFound'
import Create from '../../pages/CDE/Create/Create'
import Edit from '../../pages/CDE/Edit/Edit'
import Delete from '../../pages/CDE/Delete/Delete'

 
function Router(){
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" component={Create}/>
            <Route path="/about" component={About} />
            <Route path="/edit" component={Edit}/>
            <Route path="/delete" component={Delete}/>
            <Route component={NotFound} />
        </Switch>
    )

}

export default Router