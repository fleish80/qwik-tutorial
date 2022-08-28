import {$, component$, useOnDocument} from '@builder.io/qwik';

export const ProgrammaticListenersUseOnDocument = component$(() => {

    useOnDocument(
        'click',
        $(() => alert('Hello World! - use on document'))
    );

    return <div>App Component. Click me.</div>;
});
