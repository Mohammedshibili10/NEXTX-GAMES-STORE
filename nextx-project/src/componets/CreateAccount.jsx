import { useState } from "react";

export default function CreateAccount() {
  const [form, setForm] = useState({
    email: "",
    country: "",
    firstName: "",
    name: "",
    displayName: "",
    password: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = () => {
    alert("Account creation submitted!");
  };

  const fields = [
    { label: "Email Address", name: "email", type: "email", placeholder: "Enter your email address.." },
    { label: "Country", name: "country", type: "text", placeholder: "Enter your country of residence.." },
    { label: "First Name", name: "firstName", type: "text", placeholder: "Enter your first name.." },
    { label: "Name", name: "name", type: "text", placeholder: "Enter your name.." },
    { label: "Display Name", name: "displayName", type: "text", placeholder: "Enter your display name.." },
    { label: "Password", name: "password", type: "password", placeholder: "Enter your password.." },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-8 font-sans">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-10">
        <span className="text-[#555] text-sm font-medium cursor-pointer hover:text-[#aaa] transition-colors">
          Back
        </span>
        <span className="text-[#444] text-sm">/</span>
        <span className="text-white text-base font-bold">Account</span>
      </div>

      {/* Card */}
      <div className="max-w-[480px] mx-auto bg-[#111] border border-[#222] rounded-2xl px-10 py-9 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
        <h1 className="text-center text-white text-xl font-bold tracking-tight mb-7">
          Create Account
        </h1>

        {/* Fields */}
        {fields.map(({ label, name, type, placeholder }) => (
          <div key={name} className="mb-5">
            <label className="block text-[#e2e2e2] text-[13px] font-semibold mb-2">
              {label}
            </label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={form[name]}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[13.5px] text-white placeholder-[#444] outline-none focus:border-[#7c5cfc] focus:bg-[#1d1d1d] transition-all"
            />
          </div>
        ))}

        {/* Checkbox */}
        <label className="flex items-start gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 mb-5 cursor-pointer">
          <input
            type="checkbox"
            name="agreed"
            checked={form.agreed}
            onChange={handleChange}
            className="w-[18px] h-[18px] min-w-[18px] mt-0.5 accent-[#7c5cfc] cursor-pointer"
          />
          <span className="text-[12px] text-[#aaa] leading-relaxed">
            I am 13 years of age or older and agree to the terms of the{" "}
            <a href="#" className="text-[#7c5cfc] hover:underline">
              NextX Subscriber Agreement
            </a>{" "}
            and the{" "}
            <a href="#" className="text-[#7c5cfc] hover:underline">
              Valve Privacy Policy
            </a>
            .
          </span>
        </label>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#1e1e1e] border border-[#2e2e2e] rounded-xl py-4 text-[14px] font-semibold text-[#7c5cfc] tracking-wide cursor-pointer hover:bg-[#7c5cfc] hover:border-[#7c5cfc] hover:text-white active:scale-[0.99] transition-all"
        >
          Create
        </button>
      </div>
    </div>
  );
}