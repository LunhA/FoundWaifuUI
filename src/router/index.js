import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from '../views/Landing '

export default function route() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component = {Landing} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}