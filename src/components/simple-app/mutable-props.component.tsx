import {component$, mutable, useStore} from '@builder.io/qwik';

interface CountStore {
    count: number;
}

export const MutableProps = component$(() => {
    const store = useStore<CountStore>({count: 0});

    return (
        <>
            <button onClick$={() => store.count++}>+1</button>
            <Display count={mutable(store.count)} />
        </>);
});

interface DisplayProps {
    count: number;
}

export const Display = component$((props: DisplayProps) => {
    return <div>The count is: {props.count}</div>;
});

