import { format, isValid, parse } from "date-fns";
import { ChangeEventHandler, useRef, useState } from "react";
import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
import { usePopper } from "react-popper";
import FocusTrap from "focus-trap-react";

const DayPickerComponent = () => {
  const [selected, setSelected] = useState<Date>();
  const [inputValue, setInputValue] = useState<string>("");
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const popperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const popper = usePopper(popperRef.current, popperElement, {
    placement: "bottom-start",
  });

  const closePopper = () => {
    console.trace();
    console.log("close");
    setIsPopperOpen(false);
    buttonRef?.current?.focus();
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
    const date = parse(e.currentTarget.value, "y-MM-dd", new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  const openPopper = () => {
    setIsPopperOpen(true);
  };

  const handleDaySelect: SelectSingleEventHandler = (date) => {
    setSelected(date);
    if (date) {
      setInputValue(format(date, "y-MM-dd"));
      closePopper();
    } else {
      setInputValue("");
    }
  };

  return (
    <div>
      <div ref={popperRef}>
        <input
          type="text"
          placeholder={format(new Date(), "y-MM-dd")}
          value={inputValue}
          onChange={handleInputChange}
          className="input-reset pa2 ma2 bg-white black ba"
        />
        <button
          ref={buttonRef}
          type="button"
          className="pa2 bg-white button-reset ba"
          aria-label="Pick a date"
          onClick={isPopperOpen ? closePopper : openPopper}
        >
          <span role="img" aria-label="calendar icon">
            📅
          </span>
        </button>
      </div>
      {/* <FocusTrap
        active={isPopperOpen}
        focusTrapOptions={{
          initialFocus: false,
          allowOutsideClick: true,
          clickOutsideDeactivates: true,
          // onDeactivate: closePopper,
          ...(buttonRef.current && { fallbackFocus: buttonRef.current }),
        }}
      >
        <div>
          <button style={{ visibility: "hidden", opacity: 0 }}>&nbsp;</button> */}
      {isPopperOpen && (
        <div
          tabIndex={-1}
          style={{
            ...popper.styles.popper,
            background: "#fff",
            border: "1px solid #333",
          }}
          className="dialog-sheet"
          {...popper.attributes.popper}
          ref={setPopperElement}
          role="dialog"
        >
          <DayPicker
            initialFocus={isPopperOpen}
            mode="single"
            defaultMonth={selected}
            selected={selected}
            onSelect={handleDaySelect}
          />
        </div>
      )}
      {/* </div>
      </FocusTrap> */}
    </div>
  );
};

export default DayPickerComponent;
