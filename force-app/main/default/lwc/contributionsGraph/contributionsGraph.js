import { LightningElement } from "lwc";

class ContributionDay {
  count;
  level;
  date;
  isValidDay;
  constructor(count, level, date, isValidDay) {
    this.count = count;
    this.level =
      level === "NONE"
        ? 0
        : level === "FIRST_QUARTILE"
          ? 1
          : level === "SECOND_QUARTILE"
            ? 2
            : level === "THIRD_QUARTILEE"
              ? 3
              : level === "FOURTH_QUARTILE"
                ? 4
                : -1;
    this.date = date;
    this.isValidDay = isValidDay;
  }
}

export default class ContributionsGraph extends LightningElement {
  json = {
    data: {
      user: {
        contributionsCollection: {
          contributionCalendar: {
            total: 0,
            weeks: [
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-01-01", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-01-02", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-01-03", weekday: 3 },
                  {
                    count: 0,
                    level: "FIRST_QUARTILE",
                    date: "2024-01-04",
                    weekday: 4
                  },
                  { count: 0, level: "NONE", date: "2024-01-05", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-01-06", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-01-07", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-01-08", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-01-09", weekday: 2 },
                  {
                    count: 0,
                    level: "FIRST_QUARTILE",
                    date: "2024-01-10",
                    weekday: 3
                  },
                  { count: 0, level: "NONE", date: "2024-01-11", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-01-12", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-01-13", weekday: 6 }
                ]
              },
              {
                days: [
                  {
                    count: 0,
                    level: "THIRD_QUARTILE",
                    date: "2024-01-14",
                    weekday: 0
                  },
                  { count: 0, level: "NONE", date: "2024-01-15", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-01-16", weekday: 2 },
                  {
                    count: 0,
                    level: "THIRD_QUARTILE",
                    date: "2024-01-17",
                    weekday: 3
                  },
                  { count: 0, level: "NONE", date: "2024-01-18", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-01-19", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-01-20", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-01-21", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-01-22", weekday: 1 },
                  {
                    count: 0,
                    level: "FIRST_QUARTILE",
                    date: "2024-01-23",
                    weekday: 2
                  },
                  { count: 0, level: "NONE", date: "2024-01-24", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-01-25", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-01-26", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-01-27", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-01-28", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-01-29", weekday: 1 },
                  {
                    count: 0,
                    level: "FOURTH_QUARTILE",
                    date: "2024-01-30",
                    weekday: 2
                  },
                  {
                    count: 0,
                    level: "FIRST_QUARTILE",
                    date: "2024-01-31",
                    weekday: 3
                  },
                  { count: 0, level: "NONE", date: "2024-02-01", weekday: 4 },
                  {
                    count: 0,
                    level: "FIRST_QUARTILE",
                    date: "2024-02-02",
                    weekday: 5
                  },
                  {
                    count: 0,
                    level: "FOURTH_QUARTILE",
                    date: "2024-02-03",
                    weekday: 6
                  }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-02-04", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-02-05", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-02-06", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-02-07", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-02-08", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-02-09", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-02-10", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-02-11", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-02-12", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-02-13", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-02-14", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-02-15", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-02-16", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-02-17", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-02-18", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-02-19", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-02-20", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-02-21", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-02-22", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-02-23", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-02-24", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-02-25", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-02-26", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-02-27", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-02-28", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-02-29", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-03-01", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-03-02", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-03-03", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-03-04", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-03-05", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-03-06", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-03-07", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-03-08", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-03-09", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-03-10", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-03-11", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-03-12", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-03-13", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-03-14", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-03-15", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-03-16", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-03-17", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-03-18", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-03-19", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-03-20", weekday: 3 },
                  {
                    count: 0,
                    level: "FIRST_QUARTILE",
                    date: "2024-03-21",
                    weekday: 4
                  },
                  { count: 0, level: "NONE", date: "2024-03-22", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-03-23", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-03-24", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-03-25", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-03-26", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-03-27", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-03-28", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-03-29", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-03-30", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-03-31", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-04-01", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-04-02", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-04-03", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-04-04", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-04-05", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-04-06", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-04-07", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-04-08", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-04-09", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-04-10", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-04-11", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-04-12", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-04-13", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-04-14", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-04-15", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-04-16", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-04-17", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-04-18", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-04-19", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-04-20", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-04-21", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-04-22", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-04-23", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-04-24", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-04-25", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-04-26", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-04-27", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-04-28", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-04-29", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-04-30", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-05-01", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-05-02", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-05-03", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-05-04", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-05-05", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-05-06", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-05-07", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-05-08", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-05-09", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-05-10", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-05-11", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-05-12", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-05-13", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-05-14", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-05-15", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-05-16", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-05-17", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-05-18", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-05-19", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-05-20", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-05-21", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-05-22", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-05-23", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-05-24", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-05-25", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-05-26", weekday: 0 },
                  {
                    count: 0,
                    level: "FIRST_QUARTILE",
                    date: "2024-05-27",
                    weekday: 1
                  },
                  { count: 0, level: "NONE", date: "2024-05-28", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-05-29", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-05-30", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-05-31", weekday: 5 },
                  {
                    count: 0,
                    level: "FIRST_QUARTILE",
                    date: "2024-06-01",
                    weekday: 6
                  }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-06-02", weekday: 0 },
                  {
                    count: 0,
                    level: "SECOND_QUARTILE",
                    date: "2024-06-03",
                    weekday: 1
                  },
                  { count: 0, level: "NONE", date: "2024-06-04", weekday: 2 },
                  {
                    count: 0,
                    level: "SECOND_QUARTILE",
                    date: "2024-06-05",
                    weekday: 3
                  },
                  { count: 0, level: "NONE", date: "2024-06-06", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-06-07", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-06-08", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-06-09", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-06-10", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-06-11", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-06-12", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-06-13", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-06-14", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-06-15", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-06-16", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-06-17", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-06-18", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-06-19", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-06-20", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-06-21", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-06-22", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-06-23", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-06-24", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-06-25", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-06-26", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-06-27", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-06-28", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-06-29", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-06-30", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-07-01", weekday: 1 },
                  {
                    count: 0,
                    level: "FIRST_QUARTILE",
                    date: "2024-07-02",
                    weekday: 2
                  },
                  { count: 0, level: "NONE", date: "2024-07-03", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-07-04", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-07-05", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-07-06", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-07-07", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-07-08", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-07-09", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-07-10", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-07-11", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-07-12", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-07-13", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-07-14", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-07-15", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-07-16", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-07-17", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-07-18", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-07-19", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-07-20", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-07-21", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-07-22", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-07-23", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-07-24", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-07-25", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-07-26", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-07-27", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-07-28", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-07-29", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-07-30", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-07-31", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-08-01", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-08-02", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-08-03", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-08-04", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-08-05", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-08-06", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-08-07", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-08-08", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-08-09", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-08-10", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-08-11", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-08-12", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-08-13", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-08-14", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-08-15", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-08-16", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-08-17", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-08-18", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-08-19", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-08-20", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-08-21", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-08-22", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-08-23", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-08-24", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-08-25", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-08-26", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-08-27", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-08-28", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-08-29", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-08-30", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-08-31", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-09-01", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-09-02", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-09-03", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-09-04", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-09-05", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-09-06", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-09-07", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-09-08", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-09-09", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-09-10", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-09-11", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-09-12", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-09-13", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-09-14", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-09-15", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-09-16", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-09-17", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-09-18", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-09-19", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-09-20", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-09-21", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-09-22", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-09-23", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-09-24", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-09-25", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-09-26", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-09-27", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-09-28", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-09-29", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-09-30", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-10-01", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-10-02", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-10-03", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-10-04", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-10-05", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-10-06", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-10-07", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-10-08", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-10-09", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-10-10", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-10-11", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-10-12", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-10-13", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-10-14", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-10-15", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-10-16", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-10-17", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-10-18", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-10-19", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-10-20", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-10-21", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-10-22", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-10-23", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-10-24", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-10-25", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-10-26", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-10-27", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-10-28", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-10-29", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-10-30", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-10-31", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-11-01", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-11-02", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-11-03", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-11-04", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-11-05", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-11-06", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-11-07", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-11-08", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-11-09", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-11-10", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-11-11", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-11-12", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-11-13", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-11-14", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-11-15", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-11-16", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-11-17", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-11-18", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-11-19", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-11-20", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-11-21", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-11-22", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-11-23", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-11-24", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-11-25", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-11-26", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-11-27", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-11-28", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-11-29", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-11-30", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-12-01", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-12-02", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-12-03", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-12-04", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-12-05", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-12-06", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-12-07", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-12-08", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-12-09", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-12-10", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-12-11", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-12-12", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-12-13", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-12-14", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-12-15", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-12-16", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-12-17", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-12-18", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-12-19", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-12-20", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-12-21", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-12-22", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-12-23", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-12-24", weekday: 2 },
                  { count: 0, level: "NONE", date: "2024-12-25", weekday: 3 },
                  { count: 0, level: "NONE", date: "2024-12-26", weekday: 4 },
                  { count: 0, level: "NONE", date: "2024-12-27", weekday: 5 },
                  { count: 0, level: "NONE", date: "2024-12-28", weekday: 6 }
                ]
              },
              {
                days: [
                  { count: 0, level: "NONE", date: "2024-12-29", weekday: 0 },
                  { count: 0, level: "NONE", date: "2024-12-30", weekday: 1 },
                  { count: 0, level: "NONE", date: "2024-12-31", weekday: 2 }
                ]
              }
            ]
          }
        }
      }
    }
  };
  totalContributions;
  sun = [];
  mon = [];
  tue = [];
  wed = [];
  thu = [];
  fri = [];
  sat = [];
  connectedCallback() {
    this.processContributionData();
    console.log("renderWeeks: ", JSON.stringify(this.sun));
  }

  processContributionData() {
    this.totalContributions =
      this.json.data.user.contributionsCollection.contributionCalendar.total;
    const weeks =
      this.json.data.user.contributionsCollection.contributionCalendar.weeks;

    let firstWeek = true;

    weeks.forEach((week) => {
      const days = week.days;
      if (firstWeek) {
        let dayMap = new Map();
        days.forEach((day) => {
          dayMap.set(day.weekday, day);
        });
        if (dayMap.has(0)) {
          const temp = dayMap.get(0);
          this.sun.push(
            new ContributionDay(temp?.count, temp?.level, temp?.date, true)
          );
        } else {
          this.sun.push(new ContributionDay(0, "NONE", "0000-00-00", false));
        }
        if (dayMap.has(1)) {
          const temp = dayMap.get(1);
          this.mon.push(
            new ContributionDay(temp?.count, temp?.level, temp?.date, true)
          );
        } else {
          this.mon.push(new ContributionDay(0, "NONE", "0000-00-00", false));
        }
        if (dayMap.has(2)) {
          const temp = dayMap.get(2);
          this.tue.push(
            new ContributionDay(temp?.count, temp?.level, temp?.date, true)
          );
        } else {
          this.tue.push(new ContributionDay(0, "NONE", "0000-00-00", false));
        }
        if (dayMap.has(3)) {
          const temp = dayMap.get(3);
          this.wed.push(
            new ContributionDay(temp?.count, temp?.level, temp?.date, true)
          );
        } else {
          this.wed.push(new ContributionDay(0, "NONE", "0000-00-00", false));
        }
        if (dayMap.has(4)) {
          const temp = dayMap.get(4);
          this.thu.push(
            new ContributionDay(temp?.count, temp?.level, temp?.date, true)
          );
        } else {
          this.thu.push(new ContributionDay(0, "NONE", "0000-00-00", false));
        }
        if (dayMap.has(5)) {
          const temp = dayMap.get(5);
          this.fri.push(
            new ContributionDay(temp?.count, temp?.level, temp?.date, true)
          );
        } else {
          this.fri.push(new ContributionDay(0, "NONE", "0000-00-00", false));
        }
        if (dayMap.has(6)) {
          const temp = dayMap.get(6);
          this.sat.push(
            new ContributionDay(temp?.count, temp?.level, temp?.date, true)
          );
        } else {
          this.sun.push(new ContributionDay(0, "NONE", "0000-00-00", false));
        }
        firstWeek = false;
      } else {
        days.forEach((day) => {
          if (day.weekday === 0) {
            this.sun.push(
              new ContributionDay(day.count, day.level, day.date, true)
            );
          }
          if (day.weekday === 1) {
            this.mon.push(
              new ContributionDay(day.count, day.level, day.date, true)
            );
          }
          if (day.weekday === 2) {
            this.tue.push(
              new ContributionDay(day.count, day.level, day.date, true)
            );
          }
          if (day.weekday === 3) {
            this.wed.push(
              new ContributionDay(day.count, day.level, day.date, true)
            );
          }
          if (day.weekday === 4) {
            this.thu.push(
              new ContributionDay(day.count, day.level, day.date, true)
            );
          }
          if (day.weekday === 5) {
            this.fri.push(
              new ContributionDay(day.count, day.level, day.date, true)
            );
          }
          if (day.weekday === 6) {
            this.sat.push(
              new ContributionDay(day.count, day.level, day.date, true)
            );
          }
        });
      }
    });
  }
}
