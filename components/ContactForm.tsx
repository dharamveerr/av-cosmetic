"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronDown } from "lucide-react";

const inputCls =
  "w-full bg-transparent border-b-2 border-ink/35 focus:border-clay focus:bg-bone/40 outline-none py-2.5 text-[16px] font-medium tracking-tight placeholder:text-ink/40 transition-all duration-500 ease-silk";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.form
            key="form"
            onSubmit={submit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-0"
          >
            <Field label="First name" name="first" required />
            <Field label="Last name" name="last" required />
            <Field label="House / company" name="house" required />
            <Field label="Country" name="country" required />
            <Field label="Email" name="email" type="email" required full />
            <Field label="Type of enquiry" name="type" as="select" full
              options={["Wholesale account", "Private label", "Press / sample request", "Other"]}
            />
            <Field label="Tell us about your house" name="msg" as="textarea" full />

            <div className="lg:col-span-2 mt-6 flex items-center justify-between flex-wrap gap-6">
              <p className="eyebrow opacity-55 max-w-md">
                We respond within two business days. All enquiries reviewed by a person, in Paris.
              </p>
              <button
                type="submit"
                className="bg-ink text-bone eyebrow px-7 py-4 hover:bg-clay transition-colors duration-500 ease-silk"
              >
                Send enquiry →
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="py-20 text-center"
          >
            <div className="mx-auto w-14 h-14 rounded-full bg-ink text-bone flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h3
              className="font-display text-[40px] lg:text-[56px] tracking-tight mt-8"
              style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 72" }}
            >
              Thank you.
            </h3>
            <p className="mt-5 max-w-md mx-auto text-ink/70 leading-relaxed">
              Your enquiry has been received. A member of the trade team will be in touch
              shortly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  full?: boolean;
  as?: "input" | "textarea" | "select";
  options?: string[];
};

function Field({ label, name, type = "text", required, full, as = "input", options }: FieldProps) {
  const labelCls =
    "eyebrow opacity-80 block mb-1 transition-colors duration-500 ease-silk group-focus-within/field:text-clay group-focus-within/field:opacity-100";
  const labelInner = (
    <>
      {label}
      {required && <span className="text-clay ml-0.5">*</span>}
    </>
  );

  // Custom select rendered in a div (not a label) to avoid click conflicts
  if (as === "select") {
    return (
      <div className={`block group/field py-1.5 ${full ? "lg:col-span-2" : ""}`}>
        <span className={labelCls}>{labelInner}</span>
        <CustomSelect name={name} options={options ?? []} required={required} />
      </div>
    );
  }

  return (
    <label className={`block group/field py-1.5 ${full ? "lg:col-span-2" : ""}`}>
      <span className={labelCls}>{labelInner}</span>
      {as === "textarea" ? (
        <textarea name={name} rows={3} className={inputCls + " resize-none"} required={required} />
      ) : (
        <input name={name} type={type} className={inputCls} required={required} />
      )}
    </label>
  );
}

function CustomSelect({
  name,
  options,
  required
}: {
  name: string;
  options: string[];
  required?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [focusWithin, setFocusWithin] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // Mirror the underline focus styling of the other inputs
  const triggerCls = `w-full flex items-center justify-between bg-transparent border-b-2 py-2.5 text-[16px] font-medium tracking-tight text-left transition-all duration-500 ease-silk ${
    open || focusWithin ? "border-clay bg-bone/40" : "border-ink/35"
  } ${value ? "text-ink" : "text-ink/40"}`;

  return (
    <div className="relative" ref={ref}>
      {/* Real value for native form submission */}
      <input type="hidden" name={name} value={value} required={required} />

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onFocus={() => setFocusWithin(true)}
        onBlur={() => setFocusWithin(false)}
        className={triggerCls}
      >
        <span>{value || "Select…"}</span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-transform duration-500 ease-silk ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 bg-bone border border-ink/15 shadow-[0_24px_50px_-24px_rgba(26,20,16,0.45)] overflow-hidden"
          >
            {options.map((o, i) => {
              const active = o === value;
              return (
                <li key={o} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onClick={() => {
                      setValue(o);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3.5 text-[15px] flex items-center justify-between transition-colors duration-300 ease-silk ${
                      active ? "bg-mist text-ink" : "text-ink/80 hover:bg-mist/60 hover:text-ink"
                    } ${i !== 0 ? "border-t border-ink/10" : ""}`}
                  >
                    {o}
                    {active && <Check className="w-3.5 h-3.5 text-clay" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
