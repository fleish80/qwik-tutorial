export async function getRepositories(username: string, controller?: AbortController) {
    const resp = await fetch(`https://api.github.com/users/${username}/repos`, {
        signal: controller?.signal,
    });
    const json = await resp.json();
    return Array.isArray(json) ? json.map((repo: { name: string }) => repo.name) : null;
}
