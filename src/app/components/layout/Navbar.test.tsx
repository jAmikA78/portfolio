import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("renders the brand as a home anchor", () => {
    render(<Navbar />);
    const brand = screen.getByRole("link", { name: /Ahmed Ibrahim/ });
    expect(brand).toHaveAttribute("href", "#hero");
  });

  it("renders nav links as anchors", () => {
    render(<Navbar />);
    const about = screen.getByRole("link", { name: "About" });
    const contact = screen.getByRole("link", { name: "Contact" });
    expect(about).toHaveAttribute("href", "#about");
    expect(contact).toHaveAttribute("href", "#contact");
  });

  it("renders the hire me mailto link", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Hire Me" })).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:")
    );
  });
});
