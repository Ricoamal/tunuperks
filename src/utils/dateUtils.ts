import { isWithinInterval, getMonth } from 'date-fns';

export const isChristmas = () => {
  const currentMonth = getMonth(new Date());
  return currentMonth === 11; // December
};

export const shouldShowSnowEffect = () => {
  return isChristmas();
};