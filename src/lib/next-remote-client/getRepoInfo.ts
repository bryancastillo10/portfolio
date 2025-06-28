import { repoMappings } from '@/constants/repoMappings';

const getRepoInfo = (id: string) => {
  const repoName = repoMappings[id];
  if (!repoName) return { repoName: null, otherRepos: [] };

  const otherRepos = Object.entries(repoMappings)
    .filter(([repoId]) => repoId !== id)
    .map(([repoId, name]) => ({
      id: repoId,
      name,
    }));

  return {
    repoName,
    otherRepos,
  };
};

export default getRepoInfo;
