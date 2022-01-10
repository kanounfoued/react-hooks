import useNextPrevious from "../";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Test getPrevious() function", function () {
  const items = [{}, {}, {}, {}];

  test("Test getPrevious() with no argument passed (UNDEFINED)", function () {
    const { result } = renderHook(() => useNextPrevious());

    const { getPrevious } = result.current;

    let res = null;

    act(() => {
      res = getPrevious();
    });

    expect(res).toBe(null);
  });

  test("Test getPrevious() with empty data and index === 0", function () {
    const { result } = renderHook(() => useNextPrevious([], 0));

    const { getPrevious } = result.current;

    let res = null;

    act(() => {
      res = getPrevious();
    });

    expect(res).toBe(null);
  });

  test("Test getPrevious() with index greater than items.length - 1", function () {
    const { result } = renderHook(() => useNextPrevious([{}, {}], 5));

    const { getPrevious } = result.current;

    let res = null;

    act(() => {
      res = getPrevious();
    });

    expect(res).toBe(null);
  });

  test("Test getPrevious() with index lower than 0", function () {
    const { result } = renderHook(() => useNextPrevious([{}, {}], -5));

    const { getPrevious } = result.current;

    let res = null;

    act(() => {
      res = getPrevious();
    });

    expect(res).toBe(null);
  });

  test("Test getPrevious() with 4 elements, and index === 0", function () {
    let index = 0;

    const { result } = renderHook(() => useNextPrevious(items, index));

    const { getPrevious } = result.current;

    let res = null;

    act(() => {
      res = getPrevious();
    });

    expect(res).toBe(null);
  });

  test("Test getPrevious() with 4 elements, and index === 1", function () {
    let index = 1;

    const { result } = renderHook(() => useNextPrevious(items, index));

    const { getPrevious } = result.current;

    let res = null;

    act(() => {
      res = getPrevious();
    });

    expect(res).toBe(items[index - 1]);
  });

  test("Test getPrevious() with 4 elements, and index === 2", function () {
    let index = 2;

    const { result } = renderHook(() => useNextPrevious(items, index));

    const { getPrevious } = result.current;

    let res = null;

    act(() => {
      res = getPrevious();
    });

    expect(res).toBe(items[index - 1]);
  });

  test("Test getPrevious() with 4 elements, and index === (items.length - 1)", function () {
    let index = 3;

    const { result } = renderHook(() => useNextPrevious(items, index));

    const { getPrevious } = result.current;

    let res = null;

    act(() => {
      res = getPrevious();
    });

    expect(res).toBe(items[index - 1]);
  });
});
