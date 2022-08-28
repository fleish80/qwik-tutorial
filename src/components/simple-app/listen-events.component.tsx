import {component$} from '@builder.io/qwik';

export const ListenEvents = component$(() => {
    return <button onClick$={() => alert('Hello World!')}>Click Me</button>;
});
