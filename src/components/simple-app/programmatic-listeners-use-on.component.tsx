import {$, component$, useOn} from '@builder.io/qwik';

export const ProgrammaticListenersUseOn = component$(() => {
    useOn(
        'click',
        $(() => alert('Hello World! - use on'))
    );

    return <div>App Component. Click me.</div>;
});
