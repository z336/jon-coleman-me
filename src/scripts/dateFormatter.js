function dateFormatter(x) {
  const rawDate = new Date(x);
  const date = rawDate.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return date;
}

export default date;
