import useNextPrevious from "../";
import { renderHook } from "@testing-library/react-hooks";

describe("Test disable properties", function () {
  test("Test disable properties with no argument passed (UNDEFINED)", () => {
    const { result } = renderHook(() => useNextPrevious());

    expect(result.current.disableNext).toBe(true);
    expect(result.current.disablePrevious).toBe(true);
  });

  test("Test disable properties useNextPrevious with empty data", () => {
    const { result } = renderHook(() => useNextPrevious([], 0));

    expect(result.current.disableNext).toBe(true);
    expect(result.current.disablePrevious).toBe(true);
  });

  test("Test disable properties useNextPrevious with one element", () => {
    const { result } = renderHook(() => useNextPrevious([{}], 0));

    expect(result.current.disableNext).toBe(true);
    expect(result.current.disablePrevious).toBe(true);
  });

  test("Test disable properties useNextPrevious with two and more elements", () => {
    const { result } = renderHook(() => useNextPrevious([{}, {}], 0));

    expect(result.current.disableNext).toBe(false);
    expect(result.current.disablePrevious).toBe(true);
  });

  test("Test disable properties useNextPrevious with two and more elements, and index greater than items length", () => {
    const { result } = renderHook(() => useNextPrevious([{}, {}], 5));

    expect(result.current.disableNext).toBe(true);
    expect(result.current.disablePrevious).toBe(true);
  });

  test("Test disable properties useNextPrevious with two and more elements, and index less than 0", () => {
    const { result } = renderHook(() => useNextPrevious([{}, {}, {}], -1));

    expect(result.current.disableNext).toBe(true);
    expect(result.current.disablePrevious).toBe(true);
  });

  test("Test disable properties useNextPrevious with 3 elements, and index === 1", () => {
    const { result } = renderHook(() => useNextPrevious([{}, {}, {}], 1));

    expect(result.current.disableNext).toBe(false);
    expect(result.current.disablePrevious).toBe(false);
  });

  test("Test disable properties useNextPrevious with 3 elements, and index === 2", () => {
    const { result } = renderHook(() => useNextPrevious([{}, {}, {}], 2));

    expect(result.current.disableNext).toBe(true);
    expect(result.current.disablePrevious).toBe(false);
  });
});
