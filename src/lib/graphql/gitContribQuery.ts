export const GET_GITHUB_CONTRIBUTIONS = () => `
	query {
	user(login: "${process.env.NEXT_PUBLIC_GITHUB_USERNAME}") {
		contributionsCollection {
		contributionCalendar {
			weeks {
			contributionDays {
				date
				contributionCount
			}
			}
		}
		}
	}
	}
`;
