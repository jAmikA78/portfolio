import emailjs from "@emailjs/browser";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ContactForm } from "./ContactForm";

vi.mock("@emailjs/browser", () => ({
  default: { send: vi.fn() },
}));

const sendMock = vi.mocked(emailjs.send);

describe("ContactForm", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "service_id");
    vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", "template_id");
    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "public_key");
    sendMock.mockReset();
    sendMock.mockResolvedValue({ status: 200, text: "OK" });
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("labels every field via htmlFor", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText("Your Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Your Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("sends the message via emailjs and shows the sent state on submit", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Your Name"), "Sara");
    await user.type(screen.getByLabelText("Your Email"), "sara@example.com");
    await user.type(screen.getByLabelText("Message"), "Hello there");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(sendMock).toHaveBeenCalledOnce();
    expect(sendMock).toHaveBeenCalledWith(
      "service_id",
      "template_id",
      expect.objectContaining({
        name: "Sara",
        email: "sara@example.com",
        message: "Hello there",
      }),
      { publicKey: "public_key" }
    );
    expect(screen.getByText("Message Sent!")).toBeInTheDocument();
    expect(screen.getByLabelText("Your Name")).toHaveValue("");
  });

  it("shows an error and keeps the form when sending fails", async () => {
    sendMock.mockRejectedValue(new Error("boom"));
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Your Name"), "Sara");
    await user.type(screen.getByLabelText("Your Email"), "sara@example.com");
    await user.type(screen.getByLabelText("Message"), "Hello there");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent("Something went wrong");
    expect(screen.getByLabelText("Your Name")).toHaveValue("Sara");
    expect(screen.getByRole("button", { name: /send message/i })).toBeEnabled();
  });

  it("shows a not-configured error when env keys are missing", async () => {
    vi.stubEnv("VITE_EMAILJS_SERVICE_ID", undefined);
    vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", undefined);
    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", undefined);
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Your Name"), "Sara");
    await user.type(screen.getByLabelText("Your Email"), "sara@example.com");
    await user.type(screen.getByLabelText("Message"), "Hello there");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent("not configured");
    expect(sendMock).not.toHaveBeenCalled();
  });
});
