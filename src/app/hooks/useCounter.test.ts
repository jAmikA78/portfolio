import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useCounter } from "./useCounter";

describe("useCounter", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("starts at zero and is inactive", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.count).toBe(0);
  });

  it("does not count until started", () => {
    const { result } = renderHook(() => useCounter(100, 1000));
    act(() => vi.advanceTimersByTime(1000));
    expect(result.current.count).toBe(0);
  });

  it("reaches the target after the duration", () => {
    const { result } = renderHook(() => useCounter(100, 2000));
    act(() => result.current.start());
    act(() => vi.advanceTimersByTime(2000));
    expect(result.current.count).toBe(100);
  });

  it("renders decimal values when enabled", () => {
    const { result } = renderHook(() => useCounter(4.9, 2000, true));
    act(() => result.current.start());
    act(() => vi.advanceTimersByTime(2000));
    expect(result.current.count).toBe(4.9);
  });
});
