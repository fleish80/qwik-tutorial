import {component$, useStore} from '@builder.io/qwik';

export const StateManagement = component$(() => {
    const github = useStore({
        org: 'BuilderIO',
        repos: ['qwik', 'partytown'] as string[] | null,
    });

    return (
        <div>
            <span>
                GitHub username:
                <input value={github.org}
                onKeyUp$={(env: Event) => github.org = (env.target as HTMLInputElement).value }/>
            </span>
            <div>
                {github.repos ? (
                    <ul>
                        {github.repos.map((repo) => (
                            <li>
                                <a href={`https://github.com/${github.org}/${repo}`}>
                                    {github.org}/{repo}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    'loading...'
                )}
            </div>
        </div>
    );
});

