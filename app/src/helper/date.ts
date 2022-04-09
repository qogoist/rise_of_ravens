const units: { [index: string]: number } = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

export const getRelativeTime = (d1: Date, d2 = new Date()): string => {
  const elapsed = d1.getTime() - d2.getTime();

  let retVal = "";

  for (let u in units)
    if (Math.abs(elapsed) > units[u] || u == "second") {
      retVal = rtf.format(Math.round(elapsed / units[u]), u as Intl.RelativeTimeFormatUnit);
      break;
    }

  return retVal;
};

// This is abit of a hack but it works 😁
// Converts the date to local time in swedish format as it is similar to ISO but with timezone offset already added.
export const getLocalISOString = (): string => {
  return new Date().toLocaleString("sv").replace(" ", "T");
};
