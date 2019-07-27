import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux'
import Splash from "./src/screen/Splash";
import QuestionsPage from "./src/screen/QuestionsPage";
import Intro from "./src/screen/Intro";
import Login from "./src/screen/auth/Login";
import Verify from "./src/screen/auth/Verify";
import Home from "./src/screen/home/Home";
import Setting from "./src/screen/settings/Setting";
import EditProfile from "./src/screen/settings/EditProfile";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Stack key='root' hideNavBar>
                    <Scene key='splash' component={Splash}/>
                    <Scene key='intro' component={Intro}/>

                    <Scene key='auth' hideNavBar>
                        <Scene key='login' component={Login} />
                        <Scene key='verify' component={Verify} />
                    </Scene>

                    <Scene key='main' initial hideNavBar >
                        <Scene key='home' component={Home} initial/>
                        <Scene key='question_page' component={QuestionsPage}/>
                        {/*<Scene key ='submit_question' component = {SubmitQuestion}/>*/}
                    </Scene>

                    <Scene key='settings'  hideNavBar>
                        <Scene key = 'setting_page' component = {Setting} />
                        <Scene key = 'edit_profile' component = {EditProfile} />
                    </Scene>
                </Stack>
            </Router>
        );
    }
}

