'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { FormProps } from '../../shared/types';
import { toast } from "sonner";

const Form = ({
  title,
  description,
  inputs,
  textarea,
  btn,
  btnPosition,
  containerClass,
  inputClass,
  labelClass,
  textareaClass,
  buttonClass,
  titleClass,
  descriptionClass,
  onSubmit,
}: FormProps) => {
  const [inputValues, setInputValues] = useState<{
    name?: string;
    mail?: string;
  }>({
    name: "",
    mail: "",
  });
  const [textareaValues, setTextareaValues] = useState<string>("");

  // Update the value of the entry fields
  const changeInputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // Update the textarea value
  const changeTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValues(event.target.value);
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (loading) return;
    e.preventDefault();

    setError("");

    const name = (inputValues.name || "").trim();
    const mail = (inputValues.mail || "").trim();
    const textarea = textareaValues.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !mail || !textarea) {
      toast.error("Συμπληρώστε όλα τα πεδία.");
      return;
    }

    if (!emailRegex.test(mail)) {
      toast.error("Μη έγκυρο email.");
      return;
    }

    if (textarea.length < 5) {
      toast.error("Το μήνυμα είναι πολύ σύντομο.");
      return;
    }

    try {
      setLoading(true);

      let result;

      if (onSubmit) {
        result = await onSubmit({ name, mail, textarea });
      } else {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, mail, textarea }),
        });

        result = await res.json();
      }

      if (!result.success) {
        toast.error(result.error || "Αποτυχία αποστολής.");
      } else {
        toast.success("Το μήνυμα στάλθηκε επιτυχώς!");
        setInputValues({});
        setTextareaValues("");
      }
    } catch {
      toast.error("Σφάλμα σύνδεσης. Προσπαθήστε ξανά.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      id="contactForm"
      className={twMerge("", containerClass)}
      onSubmit={handleSubmit}
    >
      <input type="text" name="company" className="hidden" />
      {title && (
        <h2 className={twMerge("text-2xl font-bold", titleClass)}>
          {title}
        </h2>
      )}
      {description && <p className={twMerge("mb-4", descriptionClass)}>{description}</p>}
      <div className="mb-6">
        {/* Inputs */}
        <div className="mx-0 mb-1 sm:mb-4">
          {inputs &&
            inputs.map(({ type, label, name, autocomplete, placeholder }, index) => (
              <div key={`item-input-${index}`} className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor={name}
                  className={twMerge(
                    "pb-1 text-xs uppercase tracking-wider",
                    labelClass
                  )}
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  autoComplete={autocomplete}
                  value={inputValues[name as "name" | "mail"] || ""}
                  onChange={(e) => {
                    setError("");
                    toast.dismiss();
                    changeInputValueHandler(e);
                  }}
                  placeholder={placeholder}
                  className={twMerge(
                    "mb-2 w-full border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0",
                    inputClass
                  )}
                />
              </div>
            ))}
        </div>
        {/* Textarea */}
        {textarea && (
          <div className={`mx-0 mb-1 sm:mb-4`}>
            <label htmlFor={textarea.name} className="pb-1 text-xs uppercase tracking-wider">
              {textarea.label}
            </label>
            <textarea
              id={textarea.name}
              name={textarea.name}
              cols={textarea.cols}
              rows={textarea.rows}
              value={textareaValues}
              onChange={(e) => {
                setError("");
                toast.dismiss();
                changeTextareaHandler(e);
              }}
              placeholder={textarea.placeholder}
              className={twMerge(
                "mb-2 w-full border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0",
                textareaClass
              )}
            />
          </div>
        )}
      </div>
      {btn && (
        <div
          className={`${btnPosition === 'left' ? 'text-left' : btnPosition === 'right' ? 'text-right' : 'text-center'}`}
        >
          <button
            type="submit"
            disabled={loading}
            className={twMerge(
              "btn btn-primary2 sm:mb-0 flex items-center justify-center gap-2 transition-opacity",
              loading && "opacity-70 cursor-not-allowed",
              buttonClass
            )}
          >
            {loading && (
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}

            <span>
              {loading ? "Αποστολή..." : btn.title}
            </span>
          </button>
        </div>
      )}
      {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
    </form>
  );
};

export default Form;
