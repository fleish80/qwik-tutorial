import {component$, useStore, useWatch$} from '@builder.io/qwik';
import {GithubRepo} from './github-repo.model';
import {isServer} from '../../utils/is-server';
import {getRepositories} from '../../utils/repositories';

export const SimpleApp = component$(() => {

    const githubStore = useStore<GithubRepo>({
        org: 'BuilderIO',
        repos: ['qwik', 'partytown'],
    });

    useWatch$((track) => {
        // STEP 1: Tell Qwik which propreties it should track and
        // re-run this function whenever they change.
        track(githubStore, 'org');

        // STEP 2: For now, we don't want to run this code on the
        // server. We will cover SSR in the later part.
        if (isServer) return;

        // STEP 3: Perform the fetching of the repositories.
        githubStore.repos = null;
        const controller = new AbortController();
        getRepositories(githubStore.org, controller).then(
            (repos) => (githubStore.repos = repos)
        );

        // STEP 4: Return a cleanup function to abort the fetching
        // if the user changes the organization.
        return () => controller.abort();
    });

    return (
        <div>
          <span>
            GitHub organization:
            <input type="text" value={githubStore.org}  onKeyUp$={(ev) => (githubStore.org = (ev.target as HTMLInputElement).value)}/>
          </span>

            <div>Github store org{githubStore.org}</div>
            <div>
                {githubStore.repos ? (<ul>
                {githubStore.repos.map((repo: string) => (
                    <li>
                        <a href={`https://github.com/${githubStore.org}/${repo}`}>{repo}</a>
                    </li>
                ))}
                </ul>) : (<p>Loading...</p>)}
            </div>
        </div>
    )
})
