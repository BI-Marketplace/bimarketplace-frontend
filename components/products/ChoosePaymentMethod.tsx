"use client";

import { useState } from "react";
import { CreditCard, Wallet, Banknote, ChevronDown, Check } from "lucide-react";

const paymentMethods = [
  {
    value: "card",
    label: "Debit / Credit Card",
    description: "Visa, Mastercard, Verve",
    icon: CreditCard,
  },
  {
    value: "wallet",
    label: "Wallet",
    description: "Pay with your wallet balance",
    icon: Wallet,
  },
  {
    value: "transfer",
    label: "Bank Transfer",
    description: "Instant bank transfer",
    icon: Banknote,
  },
];

export default function ChoosePaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [isOpen, setIsOpen] = useState(false);

  const selectedMethodData = paymentMethods.find(
    (method) => method.value === selectedMethod
  );

  return (
    <div className="border rounded-xl p-6 bg-white">
      {/* Title */}
      <h2 className="text-[14px] font-medium text-black mb-1">
        Payment Method
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Select how you would like to pay
      </p>

      {/* Current Method Card */}
      <div className="flex items-start gap-3 border rounded-lg p-4 mb-5 bg-gray-50">
        <div className="p-2 rounded-lg bg-gray-100">
          {selectedMethodData && (
            <selectedMethodData.icon className="h-5 w-5 text-gray-700" />
          )}
        </div>

        <div>
          <p className="text-sm font-medium text-gray-800">
            {selectedMethodData?.label}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            {selectedMethodData?.description}
          </p>
        </div>
      </div>

      {/* Dropdown */}
      <div className="relative mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between border rounded-lg px-4 py-3 text-sm font-medium text-gray-800 hover:border-gray-400 transition"
        >
          <span>{selectedMethodData?.label}</span>
          <ChevronDown
            className={`h-4 w-4 text-gray-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Menu */}
        {isOpen && (
          <div className="absolute z-10 w-full mt-2 border rounded-lg bg-white overflow-hidden">
            {paymentMethods.map((method) => (
              <button
                key={method.value}
                onClick={() => {
                  setSelectedMethod(method.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition ${
                  selectedMethod === method.value ? "bg-[#E6F4EA]" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <method.icon className="h-5 w-5 text-gray-700" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {method.label}
                    </p>
                    <p className="text-xs text-gray-500">
                      {method.description}
                    </p>
                  </div>
                </div>

                {selectedMethod === method.value && (
                  <Check className="h-4 w-4 text-green-600" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Helper Text */}
      <p className="text-xs text-gray-500 leading-relaxed">
        Your payment is secure and encrypted. You can change your method at any
        time before placing your order.
      </p>
    </div>
  );
}
