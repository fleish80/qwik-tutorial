import {$, component$, useOnWindow} from '@builder.io/qwik';

export const ProgrammaticListenersUseOnWindow = component$(() => {

    useOnWindow(
        'click',
        $(() => alert('Hello World! - use on window'))
    );

    return <div>App Component. Click me.</div>;
});
