import {component$} from '@builder.io/qwik';

export const Inline = component$(() => {
  return <Greeting />
})

export const Greeting = () => {
    return <div>Hello World</div>
};
