import { vi } from "vitest";

type IntersectionEntry = Pick<IntersectionObserverEntry, "isIntersecting">;
type IntersectionListener = (entries: IntersectionEntry[]) => void;

export class IntersectionObserverMock implements IntersectionObserver {
  static instances: IntersectionObserverMock[] = [];

  root: Element | Document | null = null;
  rootMargin = "0px";
  thresholds: ReadonlyArray<number> = [];
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);

  constructor(private listener: IntersectionListener) {
    IntersectionObserverMock.instances.push(this);
  }

  trigger(isIntersecting: boolean) {
    this.listener([{ isIntersecting }]);
  }

  static reset() {
    IntersectionObserverMock.instances = [];
  }
}

export class ResizeObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

export function mockMatchMedia(query: string) {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };
}
