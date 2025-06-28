import { MoreDetailsNavbarProps } from '@/components/navigation/MoreDetailsNavbar';

const MobileProjectList = ({
  otherRepos,
  router,
  isDarkMode,
}: MoreDetailsNavbarProps) => {
  return (
    <ul
      className={`absolute top-24 right-0 rounded-xl shadow-md border p-4
		${isDarkMode ? 'bg-accent-dark/90' : 'bg-gray'}
	`}
    >
      {otherRepos &&
        otherRepos.map(repo => {
          return (
            <li className="flex flex-col items-center my-2" key={repo.id}>
              <span
                onClick={() => router?.push(`/projects/${repo.id}`)}
                className="hover:underline cursor-pointer"
              >
                {repo.name}
              </span>
            </li>
          );
        })}
    </ul>
  );
};

export default MobileProjectList;
