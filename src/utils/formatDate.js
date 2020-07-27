export default (date) => {
  const unformattedDate = new Date(date);
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const [{ value: month }, , { value: day }] = dateTimeFormat.formatToParts(
    unformattedDate
  );

  return `${day} ${month}`;
};
