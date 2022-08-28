import { component$, useStore } from '@builder.io/qwik';

export const StoringStorage = component$(() => {
    const counter = useStore({ count: 0 });

    return (
        <>
            <div>Count: {counter.count}</div>
            <button onClick$={() => counter.count++}>+1</button>
            <button onClick$={() => counter.count--}>-1</button>
        </>
    );
});
