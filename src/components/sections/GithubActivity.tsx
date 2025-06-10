'use client';

import { useState, useEffect } from 'react';
import { getGithubContributions } from '@/api/github';
import { Week } from '@/interfaces/githubContrib';

import ActivityCalendar from 'react-activity-calendar';

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
    <div>
      {calendarData.length > 0 ? (
        <ActivityCalendar data={calendarData} />
      ) : (
        <h1 className="text-2xl">Loading contributions...</h1>
      )}
    </div>
  );
};

export default GithubActivity;
