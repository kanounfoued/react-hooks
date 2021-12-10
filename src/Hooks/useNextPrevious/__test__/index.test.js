import useNextPrevious from "../";
import { renderHook } from "@testing-library/react-hooks";

let items = [];

// beforeEach(() => {
//   items.push({});
// });

afterEach(() => {
  items.push({});
});

afterAll(() => {
  items = [];
});

test("should useNextPrevious with empty data", () => {
  const { result } = renderHook(() => useNextPrevious({ items, index: 0 }));

  expect(result.current.disableNext).toBe(true);
  expect(result.current.disablePrevious).toBe(true);
});

test("should useNextPrevious with one element", () => {
  const { result } = renderHook(() => useNextPrevious({ items, index: 0 }));

  expect(result.current.disableNext).toBe(true);
  expect(result.current.disablePrevious).toBe(true);
});

test("should useNextPrevious with two and more elements", () => {
  const { result } = renderHook(() => useNextPrevious({ items, index: 0 }));

  expect(result.current.disableNext).toBe(false);
  expect(result.current.disablePrevious).toBe(true);
});
