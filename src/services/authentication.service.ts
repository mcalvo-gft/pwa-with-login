export const login = (): Promise<void | Error> => {
  return new Promise((resolve) => resolve(123));
};

export const logout = (): Promise<void | Error> => {
  return new Promise((resolve) => resolve());
};

export const getLastAccess = (): Promise<Date | Error> => {
  const mockTime = new Date();
  mockTime.setDate(mockTime.getDate() - 1);
  mockTime.setHours(mockTime.getHours() - 23);
  mockTime.setMinutes(mockTime.getMinutes() - 59);
  mockTime.setSeconds(mockTime.getSeconds() - 45);
  return new Promise((resolve) => setTimeout(() => resolve(mockTime), 1e3));
};
