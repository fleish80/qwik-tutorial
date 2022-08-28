import {component$, useClientEffect$, useRef} from '@builder.io/qwik';

export const SynchronousEvent = component$(() => {

    const aHref = useRef();
    useClientEffect$(() => {
        const handler = (event: Event) => {
            event.preventDefault();
            window.open('http://qwik.builder.io');
        }
        aHref.current!.addEventListener('click', handler);
        return () => aHref.current!.removeEventListener('click', handler);
    })

    return (
        <a href="https://www.google.com" ref={aHref}>
            click me!
        </a>
    );
});
