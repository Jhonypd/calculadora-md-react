/** @format */

export const formatDateTime = (date) => {
  const padZero = (num) => num.toString().padStart(2, "0");

  const hh = padZero(date.getHours());
  const mm = padZero(date.getMinutes());
  const ss = padZero(date.getSeconds());
  const dd = padZero(date.getDate());
  const MM = padZero(date.getMonth() + 1);
  const yyyy = padZero(date.getFullYear());

  return `${hh}:${mm}:${ss} ${dd}/${MM}/${yyyy}`;
};

export default formatDateTime;
