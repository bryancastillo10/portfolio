'use client';

import { useState, useEffect } from 'react';
import { getGithubContributions } from '@/api/github';
import { Week } from '@/interfaces/githubContrib';

import ActivityCalendar from 'react-activity-calendar';
import { customTheme } from '@/constants/heatmapTheme';

interface CalendarData {
  date: string;
  count: number;
  level: number;
}

const GithubActivity = () => {
  const [calendarData, setCalendarData] = useState<CalendarData[]>([]);

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
  return (
    <section className="flex my-4 w-xs md:w-[90%] sm:w-[90%] xl:w-full">
      {calendarData.length > 0 ? (
        <ActivityCalendar
          data={calendarData}
          theme={customTheme}
          blockSize={14}
        />
      ) : (
        <div className="h-50 w-full px-4 flex justify-center items-center bg-accent-dark animate-pulse rounded-lg">
          <h1 className="text-2xl text-white font-semibold">
            Loading contributions...
          </h1>
        </div>
      )}
    </section>
  );
};

export default GithubActivity;
