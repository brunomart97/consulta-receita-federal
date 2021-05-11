import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main } from '../pages/Main';
import { Result } from '../pages/Result';

export function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/result" component={Result} />
            </Switch>
        </BrowserRouter>
    )
};