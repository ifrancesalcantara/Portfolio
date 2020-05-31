import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {connect} from "react-redux";


import {lightTheme, darkTheme} from "./lib/styles/themes"
import {ThemeProvider} from "styled-components"
import {GlobalStyles} from "./lib/styles/globalStyles"


import Home from "./views/Home";

function App(props){
  const {theme}=props
  return (
    <ThemeProvider theme={theme==="dark"?darkTheme:lightTheme}>
      <GlobalStyles/>
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home}></Route>       
          </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function mapStateToProps(state){
  const {theme}=state
  return theme
}

export default connect(mapStateToProps)(App)