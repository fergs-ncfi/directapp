import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import SigninPage from "./pages/signin";
import ContactForm from "./components/contact-form/ContactForm.js";
import Layout from "./components/Layout/Layout.js";
import Blogs from './components/Blogs/Blogs.js';
import PageServices from './components/NCFIservices/page-services';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/contact-form" component={ContactForm} exact />
        <Route path="/Blogs" component={Blogs} exact />
        <Route path="/NCFIservices" component={PageServices} exact />
        {/* Add other routes for your different pages */}
      </Switch>
    </Layout>
  );
}

export default App;
