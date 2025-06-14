'use client';

import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

import { MapPin, User } from 'lucide-react';
import { FolderGit2, UserPlus, UserCheck, Building2 } from 'lucide-react';

import HeroRowInfo from '@/components/common/HeroRowInfo';
import GithubStats from '@/components/common/GithubStats';
import { type GithubProfileRes } from '@/interfaces/githubprofile';

const Hero = ({ profile }: { profile: GithubProfileRes<string, number> }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 w-full py-4">
      <div className="flex flex-col items-center">
        <div className="p-3 mb-2">
          <Image
            src={profile.avatarUrl}
            alt="avatar"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <HeroRowInfo icon={User} text={`@${profile.login}`} />
          <HeroRowInfo icon={MapPin} text={profile.location} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div
          className="p-4 h-[250px] w-xs md:w-md xl:w-lg bg-[url('/images/emptymac.png')] bg-cover border  
			flex flex-col justify-between rounded-md shadow-lg"
        >
          <div className="mt-4">
            <p className="text-lg">Hello, I'm {`${profile.name}` || 'Bryan'}</p>
            <h1 className="font-mono text-2xl">
              <Typewriter
                words={[
                  'Full Stack Developer',
                  'Environmental Engineer',
                  'Biological Engineer',
                  'Chemist',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
          </div>
          <div className="mb-2">
            <p className="dark:text-gray text-justify text-base">{profile.bio}</p>
          </div>
        </div>

        <ul className="flex flex-wrap justify-center gap-2 mt-4">
          <GithubStats
            icon={FolderGit2}
            text="Public Repos"
            value={profile.publicRepos}
          />
          <GithubStats icon={Building2} text="Organizations" value={5} />
          <GithubStats
            icon={UserPlus}
            text="Followers"
            value={profile.followers}
          />
          <GithubStats
            icon={UserCheck}
            text="Following"
            value={profile.following}
          />
        </ul>
      </div>
    </section>
  );
};

export default Hero;
