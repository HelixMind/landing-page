import React, { useState, useEffect } from "react";
import { CardSpotlight } from "../components/CardSpotlight.jsx";
import { Check } from "lucide-react";

const JoinForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telegram: "",
    experience: "",
    portfolioSize: "",
    predictionMarkets: [],
    whyJoin: "",
    biggestWin: "",
    agreements: [false, false, false],
  });

  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false); // new state

  useEffect(() => {
    const requiredFilled =
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.email.trim() &&
      /^\S+@\S+\.\S+$/.test(formData.email) &&
      formData.telegram.trim() &&
      formData.experience &&
      formData.portfolioSize &&
      formData.whyJoin.trim() &&
      formData.agreements.every(Boolean);

    setIsValid(requiredFilled);
  }, [formData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleAgreement = (index) => {
    const newAgreements = [...formData.agreements];
    newAgreements[index] = !newAgreements[index];
    setFormData((prev) => ({ ...prev, agreements: newAgreements }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    console.log("Form submitted:", formData);
    setSubmitted(true); // set submitted to true after success
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <Check className="mx-auto w-12 h-12 text-green-500 mb-4" />
        <h2 className="text-3xl md:text-4xl clash-display text-zinc-100 mb-2">
          You’ve Been Added to the Waitlist!
        </h2>
        <p className="text-zinc-400 text-lg">
          Thank you for applying. We’ll review your application and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <CardSpotlight>
        <form className="p-10 space-y-10 text-zinc-100" onSubmit={handleSubmit}>
          <h2 className="text-3xl md:text-4xl clash-display text-center">
            GOAT Application
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <FloatingInput
              label="First Name"
              value={formData.firstName}
              onChange={(v) => handleChange("firstName", v)}
            />
            <FloatingInput
              label="Last Name"
              value={formData.lastName}
              onChange={(v) => handleChange("lastName", v)}
            />
          </div>

          <FloatingInput
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(v) => handleChange("email", v)}
          />
          <FloatingInput
            label="Telegram Username"
            value={formData.telegram}
            onChange={(v) => handleChange("telegram", v)}
          />

          <NormalSelect
            label="Years of Trading Experience"
            value={formData.experience}
            onChange={(v) => handleChange("experience", v)}
            options={["1–2 years", "3–5 years", "5–10 years", "10+ years"]}
          />

          <NormalSelect
            label="Current Portfolio Size"
            value={formData.portfolioSize}
            onChange={(v) => handleChange("portfolioSize", v)}
            options={["$10k – $50k", "$50k – $100k", "$100k – $500k", "$500k – $1m", "$1m+"]}
          />

          <PredictionMarketsSelect
            selected={formData.predictionMarkets}
            onChange={(selected) =>
              setFormData((prev) => ({ ...prev, predictionMarkets: selected }))
            }
          />

          <FloatingTextarea
            label="WHY DO YOU WANT TO JOIN THE GOAT INNER CIRCLE?"
            value={formData.whyJoin}
            onChange={(v) => handleChange("whyJoin", v)}
            helper="Tell us about your trading goals, what you bring to the community, and why you deserve a spot among the GOATs."
          />

          <FloatingTextarea
            label="BIGGEST TRADING WIN (OPTIONAL)"
            value={formData.biggestWin}
            onChange={(v) => handleChange("biggestWin", v)}
            helper="Include entry/exit points, % gains, and why the trade stood out."
          />

          <div className="space-y-5">
            {[
              "I understand that membership is exclusive and requires active participation.",
              "I agree to maintain confidentiality of all shared strategies and insider information.",
              "I acknowledge that trading involves risk and past performance does not guarantee future results.",
            ].map((label, i) => (
              <FancyCheckbox
                key={i}
                label={label}
                checked={formData.agreements[i]}
                onChange={() => toggleAgreement(i)}
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`rounded-full w-full py-4 transition clash-display text-lg ${
              isValid ? "bg-indigo-500 hover:bg-indigo-400" : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            SUBMIT APPLICATION
          </button>
        </form>
      </CardSpotlight>
    </div>
  );
};

/* ---------- Floating Input ---------- */
const FloatingInput = ({ label, type = "text", value, onChange }) => {
  const hasValue = value.trim().length > 0;
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full bg-transparent border-b-2 border-white/20 pt-8 pb-2 focus:outline-none focus:border-indigo-500 transition"
      />
      <label
        className={`absolute left-0 text-zinc-400 transition-all duration-300 ${
          hasValue
            ? "top-[-10px] scale-90 text-indigo-400"
            : "top-8 text-base peer-placeholder-shown:top-8 peer-placeholder-shown:text-base"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

/* ---------- Floating Textarea ---------- */
const FloatingTextarea = ({ label, value, onChange, helper }) => {
  const hasValue = value.trim().length > 0;
  return (
    <div className="relative">
      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full bg-transparent border-b-2 border-white/20 pt-8 pb-2 focus:outline-none focus:border-indigo-500 resize-none transition"
      />
      <label
        className={`absolute left-0 text-zinc-400 transition-all duration-300 ${
          hasValue
            ? "top-[-10px] scale-90 text-indigo-400"
            : "top-8 text-base peer-placeholder-shown:top-8 peer-placeholder-shown:text-base"
        }`}
      >
        {label}
      </label>
      <p className="text-xs text-zinc-500 mt-3">{helper}</p>
    </div>
  );
};

/* ---------- Normal Select ---------- */
const NormalSelect = ({ label, value, onChange, options }) => (
  <div className="relative">
    <label className="block text-zinc-400 mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent border-b-2 border-white/20 pt-2 pb-2 focus:outline-none focus:border-indigo-500 transition"
    >
      <option value="" disabled>
        Select...
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-black">
          {opt}
        </option>
      ))}
    </select>
  </div>
);

/* ---------- Fancy Checkbox ---------- */
const FancyCheckbox = ({ label, checked, onChange }) => (
  <button
    type="button"
    onClick={onChange}
    className="flex items-start gap-3 text-left w-full"
  >
    <div
      className={`w-5 h-5 shrink-0 mt-1 rounded-md border flex items-center justify-center transition ${
        checked ? "bg-indigo-500 border-indigo-500" : "border-white/30 hover:border-indigo-400"
      }`}
    >
      {checked && <Check className="w-3 h-3 text-white" />}
    </div>
    <span className="text-sm text-zinc-300 leading-relaxed">{label}</span>
  </button>
);

/* ---------- Prediction Markets Multi-Select ---------- */
const PredictionMarketsSelect = ({ selected, onChange }) => {
  const options = ["Kalshi", "Polymarket", "PredictIt", "Other Platforms"];

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      onChange(selected.filter((o) => o !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div>
      <p className="text-sm text-zinc-400 mb-4">Prediction Markets Experience</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {options.map((option) => (
          <FancyCheckbox
            key={option}
            label={option}
            checked={selected.includes(option)}
            onChange={() => toggleOption(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default JoinForm;
