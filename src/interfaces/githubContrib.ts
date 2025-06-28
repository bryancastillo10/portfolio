export interface ContributionDay {
  date: string;
  contributionCount: number;
}

export interface Week {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  weeks: Week[];
}

export interface GithubContributionsResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: ContributionCalendar;
    };
  };
}
