import {component$, createContext, useContext, useContextProvider, useStore} from '@builder.io/qwik';

interface TodosStore {
    items: string[];
}
export const TodosContext = createContext<TodosStore>('Todos');
export const UseContext = component$(() => {
    useContextProvider(
        TodosContext,
        useStore<TodosStore>({
            items: ['Learn QWik', 'Build Qwik app', 'Profit'],
        })
    );

    return <Items />;
});

export const Items = component$(() => {
    // replace this with context retrieval.
    const todos = useContext(TodosContext);
    return (
        <ul>
            {todos.items.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    );
});
