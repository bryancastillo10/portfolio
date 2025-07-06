import Providers from '@/components/provider/Providers';

import { getGithubData } from '@/api/github';
import AppLayout from '@/components/layout/AppLayout';

export const revalidate = 14400;

export default async function Home() {
  const { profile, repos } = await getGithubData();

  return (
    <Providers>
      <AppLayout profile={profile} repos={repos} />
    </Providers>
  );
}
