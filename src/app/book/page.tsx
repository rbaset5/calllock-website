"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Lock, Info, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const TIME_SLOTS = [
  "11:00 am",
  "11:30 am",
  "12:00 pm",
  "12:30 pm",
  "1:00 pm",
  "1:30 pm",
  "2:00 pm",
  "2:30 pm",
  "3:00 pm",
  "3:30 pm",
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const JANUARY = 0;
const TODAY = 6;

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function BookPage() {
  const [step, setStep] = useState<"datetime" | "details">("datetime");
  const [selectedDate, setSelectedDate] = useState(7);
  const [selectedTime, setSelectedTime] = useState("");
  const [currentMonth, setCurrentMonth] = useState(JANUARY);
  const [currentYear, setCurrentYear] = useState(2026);

  // Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [source, setSource] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const addGuest = () => {
    if (guestEmail && guests.length < 10) {
      if (!guests.includes(guestEmail)) {
        setGuests([...guests, guestEmail]);
      }
      setGuestEmail("");
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("details");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendarDays = () => {
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = day === selectedDate;
      const isPast = day < TODAY;
      const dayOfWeek = (firstDay + day - 1) % 7;
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      days.push(
        <button
          key={day}
          onClick={() => !isPast && setSelectedDate(day)}
          disabled={isPast}
          className={`
            w-10 h-10 flex items-center justify-center text-sm font-bold rounded-full
            transition-all duration-200
            ${isSelected
              ? "bg-[#3d4351] text-white shadow-lg shadow-black/20"
              : isPast
                ? "text-gray-200 cursor-not-allowed"
                : isWeekend
                  ? "text-gray-400 hover:bg-gray-100 hover:text-gray-900"
                  : "text-gray-700 hover:bg-gray-100"
            }
          `}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-[#fdfbf4] flex flex-col items-center px-4 py-12 md:py-20">
      <div className="w-full max-w-[1050px] text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1c1a12] tracking-tight mb-2">
          Looking to sign up?
        </h1>
      </div>

      <div className="w-full max-w-[1050px] bg-white rounded-[2.5rem] shadow-2xl shadow-black/5 border border-gray-100 overflow-hidden">
        {step === "datetime" ? (
          <div className="flex flex-col md:flex-row">
            {/* Left Panel: Calendar - Added border-r for distinction */}
            <div className="p-8 md:p-14 md:flex-[1.1] md:border-r border-gray-100">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-[#faf7ed] border border-[#e5e1d3] rounded-2xl flex items-center justify-center text-primary">
                  <Lock size={26} className="text-[#c4a637]" />
                </div>
              </div>

              <h2 className="text-center text-xl font-bold text-[#1c1a12] mb-10">
                Talk to CallLock
              </h2>

              <div className="flex items-center justify-center gap-6 mb-8">
                <button
                  onClick={prevMonth}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors border border-transparent hover:border-gray-100"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-500" />
                </button>
                <span className="text-lg font-bold text-[#1c1a12] min-w-[180px] text-center tracking-tight">
                  {MONTH_NAMES[currentMonth]} {currentYear}
                </span>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors border border-transparent hover:border-gray-100"
                >
                  <ChevronRight className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-3 mb-4 max-w-[420px] mx-auto">
                {DAYS.map((day) => (
                  <div
                    key={day}
                    className="w-10 h-10 flex items-center justify-center text-[10px] font-black uppercase text-gray-400 mx-auto tracking-widest"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-3 max-w-[420px] mx-auto">
                {renderCalendarDays()}
              </div>
            </div>

            {/* Right Panel: Time Slots */}
            <div className="p-8 md:p-14 md:flex-1 bg-white">
              <div className="mb-10">
                <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">
                  Meeting duration
                </h3>
                <div className="inline-flex items-center justify-center bg-slate-50 text-slate-700 border border-slate-200 text-sm font-bold py-3 px-8 rounded-xl shadow-sm">
                  30 mins
                </div>
              </div>

              <div>
                <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">
                  What time works best?
                </h3>
                <p className="text-base text-slate-800 font-bold mb-4">
                  Showing times for{" "}
                  <span className="text-sky-600">
                    {MONTH_NAMES[currentMonth]} {selectedDate}, {currentYear}
                  </span>
                </p>

                <button className="flex items-center gap-1.5 text-xs text-slate-400 font-bold mb-8 hover:text-slate-600 transition-colors uppercase tracking-wider">
                  UTC -05:00 Eastern Time
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div className="space-y-3.5 max-h-[420px] overflow-y-auto pr-4 custom-scrollbar">
                  {TIME_SLOTS.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className="w-full py-4 px-6 border border-slate-100 rounded-2xl text-base font-bold text-slate-700 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all text-center bg-slate-50/30 hover:shadow-lg hover:shadow-primary/5"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 md:p-20 w-full flex justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out">
            <div className="w-full max-w-2xl">
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">
                Your information
              </h2>

              <div className="mb-10 p-7 bg-[#fafafa] rounded-[2rem] border border-slate-100 flex items-center justify-between shadow-sm">
                <div>
                  <p className="text-lg font-bold text-slate-800 mb-1">
                    {new Date(currentYear, currentMonth, selectedDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-slate-600 font-bold flex items-center gap-2">
                    <span className="text-primary">{selectedTime}</span>
                    <span className="text-slate-300">|</span>
                    <span className="flex items-center gap-1.5 text-sm">
                      <Lock size={14} className="text-[#c4a637]" /> Google Meet
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => setStep("datetime")}
                  className="px-6 py-2.5 text-sm font-bold text-sky-600 bg-sky-50 border border-sky-100 rounded-full hover:bg-sky-100 hover:border-sky-200 transition-all"
                >
                  Edit
                </button>
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-[0.2em]">
                      First name *
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-lg font-medium"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-[0.2em]">
                      Last name *
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-lg font-medium"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-[0.2em]">
                    Your email address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-lg font-medium"
                    placeholder="jane@company.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-[0.2em]">
                      Company name *
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-lg font-medium"
                      placeholder="Acme Inc"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-[0.2em]">
                      Job title *
                    </label>
                    <input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-lg font-medium"
                      placeholder="Founder"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-[0.2em]">
                    Mobile phone number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-lg font-medium"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-black text-slate-400 mb-4 uppercase tracking-[0.2em]">
                    How did you hear about us?
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["Email", "Referral", "Google Search", "Meta", "Linkedin", "Other"].map((item) => (
                      <label
                        key={item}
                        className={`
                          flex items-center justify-center p-4 border rounded-2xl cursor-pointer transition-all font-bold text-sm
                          ${source === item
                            ? "border-primary bg-primary/5 text-primary shadow-sm"
                            : "border-slate-100 bg-slate-50/50 text-slate-500 hover:border-slate-300 hover:bg-white"}
                        `}
                      >
                        <input
                          type="radio"
                          name="source"
                          value={item}
                          checked={source === item}
                          onChange={(e) => setSource(e.target.value)}
                          className="hidden"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Add guests</h3>
                    <Info size={16} className="text-slate-300" />
                  </div>
                  <p className="text-sm text-slate-500 font-medium mb-6">
                    Invite up to 10 guests to attend the meeting.
                  </p>

                  <div className="flex gap-4 mb-6">
                    <input
                      type="email"
                      placeholder="guest email..."
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="flex-1 h-14 px-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-lg font-medium"
                    />
                    <button
                      onClick={addGuest}
                      className="px-10 bg-slate-900 text-white font-black rounded-2xl hover:bg-black transition-all shadow-lg shadow-black/10 text-sm uppercase tracking-widest"
                    >
                      Add
                    </button>
                  </div>

                  <div className="space-y-3">
                    {guests.length > 0 ? (
                      guests.map((email, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 animate-in fade-in zoom-in-95 shadow-sm">
                          <span className="text-base font-bold text-slate-700">{email}</span>
                          <button
                            onClick={() => setGuests(guests.filter((_, idx) => idx !== i))}
                            className="p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="py-12 border-2 border-dashed border-slate-50 rounded-[2rem] flex flex-col items-center justify-center text-slate-300">
                        <Plus size={32} className="mb-2 opacity-20" />
                        <p className="text-[10px] font-black uppercase tracking-[0.25em]">No guests added</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-12 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => setStep("datetime")}
                    className="w-full sm:w-auto px-12 h-14 text-sm font-black text-slate-400 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-slate-100 hover:text-slate-600 transition-all uppercase tracking-[0.1em]"
                  >
                    Back
                  </button>
                  <Button size="lg" className="w-full flex-1 h-14 text-base font-black shadow-xl shadow-primary/20 uppercase tracking-[0.15em] hover:-translate-y-0.5 transition-all">
                    Confirm & Schedule
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
