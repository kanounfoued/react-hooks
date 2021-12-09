import { useState, useEffect } from "react";

/**
 *
 * @param {items} Array
 * @param {index} number => -1 if the first one it not selected yet.
 */
export default function useNextPrevious({ items = [], index = 0 }) {
  const [disableNext, setDisableNext] = useState(true);
  const [disablePrevious, setDisablePrevious] = useState(true);

  useEffect(() => {
    if (isItemsEmpty()) {
      return;
    }

    setDisableNext(!isNextEnabled());
    setDisablePrevious(!isPreviousEnabled());
  }, [index, items]);

  /**
   * Check if the list of items is empty
   */
  function isItemsEmpty() {
    return items.length === 0;
  }

  /**
   * Check if there exists a previous item
   */
  function isPreviousEnabled() {
    return index > 0;
  }

  /**
   * Check if there exists a next item
   */
  function isNextEnabled() {
    return index < items.length - 1;
  }

  /**
   * Return the previous item
   */
  function getPrevious() {
    if (!isPreviousEnabled()) {
      setDisablePrevious(true);
    }

    return items[index - 1];
  }

  /**
   * Return the next item
   */
  function getNext() {
    if (!isNextEnabled()) {
      setDisableNext(true);
    }

    return items[index + 1];
  }

  return {
    getNext,
    getPrevious,
    disableNext,
    disablePrevious,
  };
}
