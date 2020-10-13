const differenceDates = (startDate: Date, endDate: Date): number => {
  return Math.floor((startDate.getTime() - endDate.getTime()) / 1000);
};

const differenceFromNow = (startTime: Date) => {
  const now = new Date();
  return differenceDates(now, startTime);
};

const timeToJSON = (time: number) => {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600) % 24;
  const days = Math.floor(time / (24 * 3600));

  return { days, hours, minutes, seconds };
};

export { differenceDates, differenceFromNow, timeToJSON };
