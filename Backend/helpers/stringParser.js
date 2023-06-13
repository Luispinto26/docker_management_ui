function parseString(array) {
  const routeString = array[0];

  return routeString
    .split('/')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function extractTimeFromStatus(status) {
  const timeRegex = /(\d+)\s*(minutes?|hours?|days?|weeks?|years?)/;
  const matches = status.match(timeRegex);

  if (matches) {
    const timeValue = parseInt(matches[1]);
    const timeUnit = matches[2];

    return { value: timeValue, unit: timeUnit };
  }

  return null; // Return null if no time value is found in the status
}


module.exports = {parseString, extractTimeFromStatus};
