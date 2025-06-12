export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (dateString.toLowerCase() === 'present') {
    return dateString;
  }

  return date.toLocaleDateString('en-GB', {
    month: 'short',
    year: 'numeric',
  });
}
