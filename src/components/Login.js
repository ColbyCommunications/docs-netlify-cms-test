import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css?raw';
import React, { useContext } from 'react';

import { OktaContext } from '../contexts/oktaContext';

export default class Login extends React.Component {
    componentDidMount() {
        console.log(this.context);
        const signIn = this.context;
        signIn.remove();
        signIn.renderEl(
            {
                el: '#signIn',
            },
            function success(res) {
                if (res.status === 'SUCCESS') {
                    console.log('Do something with this sessionToken', res.session.token);
                } else {
                    console.log('else');
                }
            }
        );
    }

    render() {
        return <div id="signIn" />;
    }
}

Login.contextType = OktaContext;
