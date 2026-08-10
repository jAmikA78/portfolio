import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IntersectionObserverMock } from "@/test/mocks";

import { useInView } from "./useInView";

function InViewProbe() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return <div ref={ref}>{inView ? "visible" : "hidden"}</div>;
}

describe("useInView", () => {
  it("reports not in view initially", () => {
    render(<InViewProbe />);
    expect(screen.getByText("hidden")).toBeInTheDocument();
  });

  it("reports in view once intersecting", () => {
    render(<InViewProbe />);
    const observer = IntersectionObserverMock.instances.at(-1);
    expect(observer).toBeDefined();
    act(() => observer!.trigger(true));
    expect(screen.getByText("visible")).toBeInTheDocument();
  });
});
