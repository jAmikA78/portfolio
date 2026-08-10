import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

import { IntersectionObserverMock, mockMatchMedia, ResizeObserverMock } from "./mocks";

afterEach(() => {
  cleanup();
  IntersectionObserverMock.reset();
  vi.restoreAllMocks();
});

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
vi.stubGlobal("ResizeObserver", ResizeObserverMock);

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(mockMatchMedia),
});

Object.defineProperty(Element.prototype, "scrollIntoView", {
  writable: true,
  value: vi.fn(),
});
