import {component$, useStore} from '@builder.io/qwik';
import {GithubRepo} from './github-repo.model';

export const SimpleApp = component$(() => {

    const githubStore = useStore<GithubRepo>({
        org: 'BuilderIO',
        repos: ['qwik', 'partytown'],
    })

    return (
        <div>
          <span>
            GitHub organization:
            <input type="text" value={githubStore.org}/>
          </span>
            <div>
                {githubStore.repos ? (<ul>
                {githubStore.repos.map((repo: string) => (
                    <li>
                        <a href={`https://github.com/BuilderIO/${repo}`}>{repo}</a>
                    </li>
                ))}
                </ul>) : (<p>Loading...</p>)}
            </div>
        </div>
    )
})
