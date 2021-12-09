import React from "react";
import useNextPrevious from "../../Hooks/useNextPrevious";

export default function NextPrevious({
  items,
  index,
  handleIndexChange,
  handleCurrentElementChange,
}) {
  const {
    disableNext,
    disablePrevious,
    getNext,
    getPrevious,
  } = useNextPrevious({ items, index });

  function clickNext() {
    const item = getNext();

    handleCurrentElementChange(item);
    handleIndexChange(index + 1);
  }

  function clickPrevious() {
    const item = getPrevious();

    handleCurrentElementChange(item);
    handleIndexChange(index - 1);
  }

  return (
    <div className="">
      <button disabled={disablePrevious} onClick={clickPrevious}>
        Previous
      </button>
      <button disabled={disableNext} onClick={clickNext}>
        Next
      </button>
    </div>
  );
}
