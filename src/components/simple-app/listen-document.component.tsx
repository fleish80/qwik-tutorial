/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

export const ListenDocument = component$(() => {
    const store = useStore({ x: 0, y: 0 });
    return (
        <div
            document:onMouseMove$={(event) => {
                store.x = event.x;
                store.y = event.y;
            }}
        >
            Your mouse location is ({store.x}, {store.y}).
        </div>
    );
});
