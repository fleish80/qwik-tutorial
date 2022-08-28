import {component$, useStore} from '@builder.io/qwik';

interface CountStore {
    count: number;
}

export const PassingStores = component$(() => {
    const store = useStore<CountStore>({count: 0});

    return (
        <>
            <button onClick$={() => store.count++}>+1</button>
            <Display countStore={store}/>
        </>
    );
});

interface DisplayProps {
    countStore: CountStore;
}

export const Display = component$(({countStore}: DisplayProps) => {
    return <div>The count is: {countStore.count}</div>;
});
