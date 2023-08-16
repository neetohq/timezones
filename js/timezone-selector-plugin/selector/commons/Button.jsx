import { h } from "preact";

function Button({
  children,
  customClass = "",
  hideCitiesTooltip = false,
  id = "",
  key = "",
  toolTipPosition = "bottom",
  timezone,
  onClick,
}) {
  const {
    label, keywords: value, isDST, cities,
  } = timezone;

  const getCurrentTimeInTimezone = (timeZone) => {
    const currentTimeInUTC = new Date();

    const options = {
      timeZone,
      hour12: true,
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
      {... {
        id, key, onClick, value,
      }}
      className={`flex items-center gap-2 py-2 text-md ${customClass}`}
      type="submit"
    >
      <span className="min-w-0 text-left break-words grow">
        {hideCitiesTooltip
          ? (label) : (
            <span
              data-tooltip={cities}
              data-tooltip-position={toolTipPosition}
              value={value}
            >
              {label}
            </span>
          )}

        {isDST && (
          <span
            data-tooltip="Daylight saving time applicable"
            data-tooltip-position={toolTipPosition}
            value={value}
          >
            &#127774;
          </span>
        )}
      </span>
      <span className="flex items-center shrink-0">{getCurrentTimeInTimezone(timezone.utc[0])}</span>
      {children}
    </button>
  );
}

export default Button;
