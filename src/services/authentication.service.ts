export const login = (): Promise<void | Error> => {
  return new Promise((resolve) => resolve());
};

export const logout = (): Promise<void | Error> => {
  return new Promise((resolve) => resolve());
};

export const getLastAccess = (): Promise<Date | Error> => {
  const mockTime = new Date();
  mockTime.setDate(mockTime.getDate() - 1);
  mockTime.setHours(mockTime.getHours() - 2);
  mockTime.setMinutes(mockTime.getMinutes() - 30);
  mockTime.setSeconds(mockTime.getSeconds() - 19);
  return new Promise((resolve) => setTimeout(() => resolve(mockTime), 1e3));
};
