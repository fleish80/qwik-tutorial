import {component$, Host} from '@builder.io/qwik';
import {Logo} from '../logo/logo';
import {SimpleApp} from '../simple-app/simple-app';

export const App = component$(() => {
    return (
        <Host>
            <Logo/>

            <h1>Qwik tutorial</h1>

            <SimpleApp />

        </Host>
    );
});
