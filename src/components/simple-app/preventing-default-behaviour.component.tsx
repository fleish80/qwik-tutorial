import { component$ } from '@builder.io/qwik';

export const PreventingDefaultBehaviour = component$(() => {
    return (
        <a href="https://www.google.com" onClick$={() => alert('do something else.')} preventdefault:click>
            click me!
        </a>
    );
});
