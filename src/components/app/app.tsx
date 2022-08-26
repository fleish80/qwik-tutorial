import {component$} from '@builder.io/qwik';
import {Logo} from '../logo/logo';
import {HelloWorld} from '../simple-app/hello-world.component';
import {Basic} from '../simple-app/basic.component';
import {StateManagement} from '../simple-app/state-management.component';
import {FetchingResources} from '../simple-app/fetching-resources.component';

export const App = component$(() => {
    return (
        <div class="my-app p-20">
            <Logo/>
            {/*<HelloWorld />*/}
            {/*<Basic />*/}
            {/*<StateManagement />*/}
            <FetchingResources/>
        </div>
    );
});
