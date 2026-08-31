"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-line bg-marigold-light/25 p-8 text-center">
        <p className="font-display text-xl text-ink">Message sent</p>
        <p className="mt-2 text-sm text-ink-soft">
          Thanks for writing in — I read every message and will get back to
          you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-ink-soft">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-[15px] text-ink outline-none focus:border-ink/40"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-ink-soft">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-[15px] text-ink outline-none focus:border-ink/40"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm text-ink-soft"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-[15px] text-ink outline-none focus:border-ink/40"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-berry">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/85 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
