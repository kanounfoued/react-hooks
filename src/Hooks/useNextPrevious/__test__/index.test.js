import useNextPrevious from "../";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Test disable properties", function () {
  test("Test disable properties useNextPrevious with empty data", () => {
    const { result } = renderHook(() =>
      useNextPrevious({ items: [], index: 0 })
    );

    expect(result.current.disableNext).toBe(true);
    expect(result.current.disablePrevious).toBe(true);
  });

  test("Test disable properties useNextPrevious with one element", () => {
    const { result } = renderHook(() =>
      useNextPrevious({ items: [{}], index: 0 })
    );

    expect(result.current.disableNext).toBe(true);
    expect(result.current.disablePrevious).toBe(true);
  });

  test("Test disable properties useNextPrevious with two and more elements", () => {
    const { result } = renderHook(() =>
      useNextPrevious({ items: [{}, {}], index: 0 })
    );

    expect(result.current.disableNext).toBe(false);
    expect(result.current.disablePrevious).toBe(true);
  });

  test("Test disable properties useNextPrevious with two and more elements, and index greater than items length", () => {
    const { result } = renderHook(() =>
      useNextPrevious({ items: [{}, {}], index: 5 })
    );

    expect(result.current.disableNext).toBe(true);
    expect(result.current.disablePrevious).toBe(true);
  });

  test("Test disable properties useNextPrevious with two and more elements, and index less than 0", () => {
    const { result } = renderHook(() =>
      useNextPrevious({ items: [{}, {}, {}], index: -1 })
    );

    expect(result.current.disableNext).toBe(true);
    expect(result.current.disablePrevious).toBe(true);
  });

  test("Test disable properties useNextPrevious with 3 elements, and index === 1", () => {
    const { result } = renderHook(() =>
      useNextPrevious({ items: [{}, {}, {}], index: 1 })
    );

    expect(result.current.disableNext).toBe(false);
    expect(result.current.disablePrevious).toBe(false);
  });

  test("Test disable properties useNextPrevious with 3 elements, and index === 2", () => {
    const { result } = renderHook(() =>
      useNextPrevious({ items: [{}, {}, {}], index: 2 })
    );

    expect(result.current.disableNext).toBe(true);
    expect(result.current.disablePrevious).toBe(false);
  });
});

describe("Test getNext() function", function () {
  test("Test getNext() with 3 elements, and index 0", function () {
    const items = [{}, {}, {}];
    const index = 0;

    const { result } = renderHook(() => useNextPrevious({ items, index }));

    const { getNext } = result.current;

    let res = null;

    act(() => {
      res = getNext();
    });

    expect(res).toBe(items[index + 1]);
  });

  test("Test getNext() with 3 elements, and index 1", function () {
    const items = [{}, {}, {}];
    const index = 1;

    const { result } = renderHook(() => useNextPrevious({ items, index }));

    const { getNext } = result.current;

    let res = null;

    act(() => {
      res = getNext();
    });

    expect(res).toBe(items[index + 1]);
  });

  test("Test getNext() with 3 elements, and index 2", function () {
    const items = [{}, {}, {}];
    const index = 2;

    const { result } = renderHook(() => useNextPrevious({ items, index }));

    const { getNext } = result.current;

    let res = null;

    act(() => {
      res = getNext();
    });

    expect(res).toBe(null);
  });
});
