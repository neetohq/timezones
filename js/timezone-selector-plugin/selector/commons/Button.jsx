import { h } from "preact";

function Button({
  children,
  customClass = "",
  hideCitiesTooltip = false,
  id = "",
  key = "",
  timezone,
  onClick,
  is24H,
}) {
  const {
    label, keywords: value, isDst, cities,
  } = timezone;

  const getCurrentTimeInTimezone = (timeZone) => {
    const currentTimeInUTC = new Date();

    const options = {
      timeZone,
      hour12: !is24H,
      hour: "numeric",
      minute: "numeric",
    };

    const currentTimeInTimezone = currentTimeInUTC.toLocaleString(
      "en-US",
      options,
    );

    return currentTimeInTimezone;
  };

  return (
    <button
      {...{
        id,
        key,
        onClick,
        value,
      }}
      className={`flex items-center gap-2 py-2 text-md ${customClass}`}
      type="button"
    >
      <div className="min-w-0 text-left break-words grow flex space-x-1">
        {hideCitiesTooltip ? (
          label
        ) : (
          <span value={value} title={cities}>
            {label}
          </span>
        )}
        {isDst && (
          <span value={value} title="Daylight savings time applicable">
            &#127774;
          </span>
        )}
      </div>
      <span className="flex items-center shrink-0">
        {getCurrentTimeInTimezone(timezone.utc[0])}
      </span>
      {children}
    </button>
  );
}

export default Button;
