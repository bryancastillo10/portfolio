'use client';

import { useState, useEffect } from 'react';
import { useAppSelector } from '@/lib/redux/hooks';
import { getGithubContributions } from '@/api/github';
import { Week } from '@/interfaces/githubContrib';

import ActivityCalendar from 'react-activity-calendar';
import { lightModeScale, darkModeScale } from '@/constants/heatmapTheme';

interface CalendarData {
  date: string;
  count: number;
  level: number;
}

const GithubActivity = () => {
  const [calendarData, setCalendarData] = useState<CalendarData[]>([]);
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  const formatContributions = (weeks: Week[]) => {
    return weeks.flatMap(week =>
      week.contributionDays.map(day => ({
        date: day.date,
        count: day.contributionCount,
        level: Math.min(day.contributionCount, 4),
      })),
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contribData = await getGithubContributions();
        if (contribData) {
          const formatted = formatContributions(contribData);
          setCalendarData(formatted);
        } else {
          console.warn('No contribution data received.');
        }
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
      }
    };

    fetchData();
  }, []);

  const currTheme = isDarkMode
    ? { dark: darkModeScale }
    : { light: lightModeScale };

  return (
    <section className="flex my-4 w-xs md:w-[90%] sm:w-[90%] xl:w-full">
      {calendarData.length > 0 ? (
        <ActivityCalendar
          data={calendarData}
          theme={currTheme}
          colorScheme={isDarkMode ? 'dark' : 'light'}
          blockSize={14}
        />
      ) : (
        <div className="h-50 w-full px-4 flex justify-center items-center bg-accent-dark animate-pulse rounded-lg">
          <h1 className="text-2xl text-[#fff8f1] font-semibold">
            Loading contributions...
          </h1>
        </div>
      )}
    </section>
  );
};

export default GithubActivity;
