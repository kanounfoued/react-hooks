import useNextPrevious from "../";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Test getNext() function", function () {
  const items = [{}, {}, {}, {}];

  test("Test getNext() with no argument passed (UNDEFINED)", function () {
    const { result } = renderHook(() => useNextPrevious());

    const { getNext } = result.current;

    let res = null;

    act(() => {
      res = getNext();
    });

    expect(res).toBe(null);
  });

  test("Test getNext() with empty data and index === 0", function () {
    const { result } = renderHook(() => useNextPrevious([], 0));

    const { getNext } = result.current;

    let res = null;

    act(() => {
      res = getNext();
    });

    expect(res).toBe(null);
  });

  test("Test getNext() with index greater than items.length - 1", function () {
    const { result } = renderHook(() => useNextPrevious([{}, {}], 5));

    const { getNext } = result.current;

    let res = null;

    act(() => {
      res = getNext();
    });

    expect(res).toBe(null);
  });

  test("Test getNext() with index lower than 0", function () {
    const { result } = renderHook(() => useNextPrevious([{}, {}], -5));

    const { getNext } = result.current;

    let res = null;

    act(() => {
      res = getNext();
    });

    expect(res).toBe(null);
  });

  test("Test getNext() with 4 elements, and index === 0", function () {
    const index = 0;

    const { result } = renderHook(() => useNextPrevious(items, index));

    const { getNext } = result.current;

    let res = null;

    act(() => {
      res = getNext();
    });

    expect(res).toBe(items[index + 1]);
  });

  test("Test getNext() with 4 elements, and index === 1", function () {
    const index = 1;

    const { result } = renderHook(() => useNextPrevious(items, index));

    const { getNext } = result.current;

    let res = null;

    act(() => {
      res = getNext();
    });

    expect(res).toBe(items[index + 1]);
  });

  test("Test getNext() with 4 elements, and index === 2", function () {
    const index = 2;

    const { result } = renderHook(() => useNextPrevious(items, index));

    const { getNext } = result.current;

    let res = null;

    act(() => {
      res = getNext();
    });

    expect(res).toBe(items[index + 1]);
  });

  test("Test getNext() with 4 elements, and index === (items.length - 1)", function () {
    const index = items.length - 1;

    const { result } = renderHook(() => useNextPrevious(items, index));

    const { getNext } = result.current;

    let res = null;

    act(() => {
      res = getNext();
    });

    expect(res).toBe(null);
  });
});
