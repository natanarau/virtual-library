import { render } from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";
import { BookContextProvider } from "../context/ContextDataBook";
import { FavoriteBook } from "../pages/FavoriteBook";
import { NotFound } from "../pages/NotFound";
import { Result } from "../pages/Results";

export const Routes = () => {
  return (
    <BookContextProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/results" component={Result} />
            <Route path="/favorite-book" component={FavoriteBook} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </BookContextProvider>
  );
};

render(<Routes />, document.getElementById("root"));
