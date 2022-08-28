/* eslint-disable no-console */
import { component$, useStore, useWatch$ } from '@builder.io/qwik';

interface AppStore {
    count: number;
    delayCount: number;
}
export const UseWatch = component$(() => {
    const store = useStore({
        count: 0,
        delayCount: 0,
    });
    console.log('Render: <App>');
    useWatch$(({ track }) => {
        track(store, 'count');
        // tracking `store.count`
        // setup a timer to copy `count => delayCount` after 2 seconds.
        const id = setTimeout(() => store.delayCount++, 2000);
        return () => {
            // cleanup code
            clearTimeout(id);
        };
    });
    return (
        <>
            <DisplayCount store={store} />
            <br/>
            <DisplayDelayCount store={store} />
            <br/>
            <button onClick$={() => store.count++}>+1</button>
        </>
    );
});

export const DisplayCount = component$((props: { store: AppStore }) => {
    console.log('Render: <DisplayA>');
    return <>{props.store.count}</>;
});

export const DisplayDelayCount = component$((props: { store: AppStore }) => {
    console.log('Render: <DisplayB>');
    return <>{props.store.delayCount}</>;
});
