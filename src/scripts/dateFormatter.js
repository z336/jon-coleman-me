function dateFormatter(pubDate) {
  const rawDate = new Date(pubDate);
  const date = rawDate.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return date;
}
