const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

// For Github Profile and Organizations
export const getGitHubProfile = async () =>{
	if(!username || !token) {
		throw new Error('GitHub username or token is not defined at the env variables');
	}

	const res = await fetch(`https://api.github.com/users/${username}`, {
		headers: {
			'Authorization': `token ${token}`,
		},
		next: { revalidate: 3600},
	});

	if (!res.ok) {
		throw new Error('Failed to fetch GitHub profile data');
	}

	return res.json();
}

export const getGitHubOrgs = async () => {
		if(!username || !token) {
		throw new Error('GitHub username or token is not defined at the env variables');
	}

	const res = await fetch(`https://api.github.com/users/${username}/orgs`, {
		headers: {
			'Authorization': `token ${token}`,
		},
		next: { revalidate: 3600},
	});

	if (!res.ok) {
		throw new Error('Failed to fetch GitHub organizations data');
	}

	return res.json();
}


// For GitHub Repositories
const repoNames = ["airbnb-clone", "water-analytics", "dna-seq-explorer", "space-chat", "co2-emissions-analysis"]

export const getGitHubRepos = async () => {
	if(!username || !token) {
		throw new Error('GitHub username or token is not defined at the env variables');
	}

	  const fetches = repoNames.map((repo) =>
    fetch(`https://api.github.com/repos/${username}/${repo}`, {
      headers: {
        Authorization: `token ${token}`,
      },
      next: { revalidate: 3600 },
    }).then(async (res) => {
      if (!res.ok) {
        console.error(`Failed to fetch ${repo}`);
        return null; // Skip invalid repos
      }
      return res.json();
    })
  );

  const results = await Promise.all(fetches);

  return results.filter(Boolean);
}