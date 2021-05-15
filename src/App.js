import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AllowNotification from "./pages/AllowNotification";
import CodeConfirm from "./pages/CodeConfirm";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import AppLayout from "./pages/Layout/AppLayout";
import PlanLayout from "./pages/Layout/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import Welcome from "./pages/Welcome";
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Route
        exact="true"
        path={[
          "/",
          "/invite",
          "/get_username",
          "/code_confirm",
          "/allow_notification",
        ]}
      >
        <PlanLayout>
          <Switch>
            <Route exact="true" path="/" component={Welcome} />
            <Route exact="true" path="/invite" component={PhoneConfirmation} />
            <Route exact="true" path="/code_confirm" component={CodeConfirm} />
            <Route
              exact="true"
              path="/allow_notification"
              component={AllowNotification}
            />
          </Switch>
        </PlanLayout>
      </Route>

      <Route exact="true" path={['/home', '/explore', '/profile', '/code-confirm']}>
        <AppLayout>
          <Switch>
            <Route exact="true" path="/home" component={() => <Home />}/>
            <Route exact="true" path="/explore" component={Explore}/>
            <Route exact="true" path="/profile" component={Profile}/>
            <Route exact="true" path="/code-confirm" component={CodeConfirm}/>
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
