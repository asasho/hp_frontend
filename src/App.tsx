import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import Top from "./pages/Top";
import About from "./pages/About";
import Service from "./pages/Service";
import Recruit from "./pages/Recruit";
import { NewsMemo } from "./pages/news/News";
import OneNews from "./pages/news/OneNews";
import { ContactMemo } from "./pages/contact/Contact";
import { Layout } from "./organisms/Layout";
import Loading from "./pages/Loading";

function App() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Layout>
      <Switch>
        <Route exact path="/load" component={Loading} />
        <Route exact path="/" component={Top} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/careers" component={Recruit} />
        <Route path="/news/:id" component={OneNews} />
        <Route path="/news" component={NewsMemo} />
        <Route path="/contact" component={ContactMemo} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
