import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux'
import Splash from "./src/screen/Splash";
import QuestionsPage from "./src/screen/QuestionsPage";
import Intro from "./src/screen/Intro";
import Login from "./src/screen/auth/Login";
import Verify from "./src/screen/auth/Verify";
import Home from "./src/screen/home/Home";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Stack key='root' initial hideNavBar>
                    <Scene key='splash' component={Splash} initial/>
                    <Scene key='intro' component={Intro} initial/>

                    <Scene key='auth' hideNavBar >
                        <Scene key='login' component={Login} />
                        <Scene key='verify' component={Verify} />
                    </Scene>

                    <Scene key='home' hideNavBar>
                        <Scene key='home' component={Home} />
                        <Scene key='question_page' component={QuestionsPage}/>
                    </Scene>
                </Stack>
            </Router>
        );
    }
}

