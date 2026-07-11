"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  FileText, 
  Settings, 
  Shield, 
  Gift, 
  Award, 
  Clock, 
  CheckCircle, 
  Plus, 
  LogOut, 
  ChevronRight, 
  Download,
  AlertCircle
} from "lucide-react";
import toast from "react-hot-toast";

type ActiveTab = "overview" | "orders" | "edit-profile" | "rewards" | "security";

interface Order {
  id: string;
  subject: string;
  topic: string;
  deadline: string;
  status: "in-progress" | "under-review" | "completed";
  pages: number;
  price: string;
  fileUrl?: string;
}

const MOCK_ORDERS: Order[] = [
  {
    id: "AIN-9821-UK",
    subject: "Business Law",
    topic: "Corporate Governance & Breaches of Fiduciary Duty in the UK",
    deadline: "2026-07-22",
    status: "in-progress",
    pages: 8,
    price: "£120.00"
  },
  {
    id: "AIN-7650-UK",
    subject: "Nursing",
    topic: "Mental Health Care Plan and Interventions for Elderly Patients",
    deadline: "2026-07-15",
    status: "under-review",
    pages: 5,
    price: "£75.00"
  },
  {
    id: "AIN-4122-UK",
    subject: "Computer Science",
    topic: "Development and Security Evaluation of a Decentralized Web App",
    deadline: "2026-06-28",
    status: "completed",
    pages: 12,
    price: "£185.00",
    fileUrl: "#"
  }
];

export default function ProfilePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");
  const [isClient, setIsClient] = useState(false);
  const [profile, setProfile] = useState({
    name: "Student",
    email: "student@example.com",
    phone_no: "+44 7300 000000",
    location: "United Kingdom",
    created_at: "2026-03-10",
  });
  
  const [editForm, setEditForm] = useState({ ...profile });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  useEffect(() => {
    setIsClient(true);
    // Check auth
    const token = localStorage.getItem("ain_auth_token");
    if (!token) {
      toast.error("Please login to access your profile.");
      router.push("/login?redirect=/profile");
      return;
    }

    // Load profile data
    const rawData = localStorage.getItem("ain_user_data");
    const localName = localStorage.getItem("ain_user_name");
    const localEmail = localStorage.getItem("ain_user_email");

    if (rawData) {
      try {
        const parsed = JSON.parse(rawData);
        const merged = {
          name: parsed.name || localName || "Student",
          email: parsed.email || localEmail || "",
          phone_no: parsed.phone_no || parsed.phone || "+44 7300 000000",
          location: parsed.location || parsed.country || "United Kingdom",
          created_at: parsed.created_at || "2026-03-10"
        };
        setProfile(merged);
        setEditForm(merged);
      } catch (e) {
        // use fallbacks
      }
    } else if (localName || localEmail) {
      const fallback = {
        name: localName || "Student",
        email: localEmail || "",
        phone_no: "+44 7300 000000",
        location: "United Kingdom",
        created_at: "2026-03-10"
      };
      setProfile(fallback);
      setEditForm(fallback);
    }
  }, [router]);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(editForm);
    localStorage.setItem("ain_user_name", editForm.name);
    localStorage.setItem("ain_user_email", editForm.email);
    localStorage.setItem("ain_user_data", JSON.stringify(editForm));
    
    // Dispatch event to update Navbar
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("ain-auth-change"));
    }

    toast.success("Profile updated successfully!");
  };

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast.error("New passwords do not match.");
      return;
    }
    toast.success("Password updated successfully!");
    setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const handleLogout = () => {
    localStorage.removeItem("ain_auth_token");
    localStorage.removeItem("ain_user_name");
    localStorage.removeItem("ain_user_email");
    localStorage.removeItem("ain_user_data");
    
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("ain-auth-change"));
    }

    toast.success("Logged out successfully.");
    router.push("/");
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16">
      {/* Cover Header */}
      <div className="h-44 md:h-56 bg-gradient-to-r from-[#1e3a5f] to-[#0f2a4a] relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(107,33,168,0.15),transparent)] pointer-events-none" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 -mt-16 md:-mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Area */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* User Profile Card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] p-6 text-center">
              <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-tr from-[#3f159a] to-[#7e22ce] text-white flex items-center justify-center font-bold text-3xl shadow-[0_8px_20px_rgba(63,21,154,0.2)] mb-4">
                {profile.name.charAt(0).toUpperCase()}
              </div>
              <h3 className="text-xl font-bold text-[#1e1b4b] truncate">{profile.name}</h3>
              <p className="text-xs text-gray-400 mt-1 font-semibold tracking-wide uppercase">UK Student Member</p>
              
              <div className="mt-5 border-t border-gray-100 pt-5 text-left space-y-3.5 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-purple-600 shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-purple-600 shrink-0" />
                  <span className="truncate">{profile.phone_no}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-purple-600 shrink-0" />
                  <span className="truncate">{profile.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-purple-600 shrink-0" />
                  <span className="truncate">Joined {new Date(profile.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}</span>
                </div>
              </div>
            </div>

            {/* Side Navigation Menu */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] p-2">
              <nav className="flex flex-col gap-1">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeTab === "overview" 
                      ? "bg-[#3f159a] text-white shadow-[0_4px_12px_rgba(63,21,154,0.15)]" 
                      : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4" />
                    <span>Dashboard</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${activeTab === "overview" ? "rotate-90" : ""}`} />
                </button>

                <button
                  onClick={() => setActiveTab("orders")}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeTab === "orders" 
                      ? "bg-[#3f159a] text-white shadow-[0_4px_12px_rgba(63,21,154,0.15)]" 
                      : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4" />
                    <span>My Orders</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${activeTab === "orders" ? "rotate-90" : ""}`} />
                </button>

                <button
                  onClick={() => setActiveTab("edit-profile")}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeTab === "edit-profile" 
                      ? "bg-[#3f159a] text-white shadow-[0_4px_12px_rgba(63,21,154,0.15)]" 
                      : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Settings className="h-4 w-4" />
                    <span>Edit Profile</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${activeTab === "edit-profile" ? "rotate-90" : ""}`} />
                </button>

                <button
                  onClick={() => setActiveTab("rewards")}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeTab === "rewards" 
                      ? "bg-[#3f159a] text-white shadow-[0_4px_12px_rgba(63,21,154,0.15)]" 
                      : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Gift className="h-4 w-4" />
                    <span>Rewards & Offers</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${activeTab === "rewards" ? "rotate-90" : ""}`} />
                </button>

                <button
                  onClick={() => setActiveTab("security")}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeTab === "security" 
                      ? "bg-[#3f159a] text-white shadow-[0_4px_12px_rgba(63,21,154,0.15)]" 
                      : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Shield className="h-4 w-4" />
                    <span>Security Settings</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${activeTab === "security" ? "rotate-90" : ""}`} />
                </button>

                <button
                  onClick={handleLogout}
                  className="flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm text-red-600 hover:bg-red-50 transition-all duration-300 mt-2"
                >
                  <div className="flex items-center gap-3">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </div>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] p-6 min-h-[460px]">
              
              <AnimatePresence mode="wait">
                {/* 1. Dashboard Overview Tab */}
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-2xl font-extrabold text-[#1e1b4b]">Welcome back, {profile.name}!</h2>
                      <p className="text-sm text-gray-500 mt-1">Here is a quick summary of your academic assignments and tasks.</p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div className="bg-gradient-to-tr from-purple-50 to-indigo-50 border border-purple-100 p-5 rounded-2xl flex items-center justify-between">
                        <div>
                          <span className="text-[1.8rem] font-black text-[#3f159a]">1</span>
                          <h4 className="text-sm font-bold text-slate-700 mt-1">Active Assignment</h4>
                        </div>
                        <div className="h-10 w-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700">
                          <Clock className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="bg-gradient-to-tr from-green-50 to-emerald-50 border border-green-100 p-5 rounded-2xl flex items-center justify-between">
                        <div>
                          <span className="text-[1.8rem] font-black text-green-700">1</span>
                          <h4 className="text-sm font-bold text-slate-700 mt-1">Completed Order</h4>
                        </div>
                        <div className="h-10 w-10 bg-green-100 rounded-xl flex items-center justify-center text-green-700">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="bg-gradient-to-tr from-amber-50 to-orange-50 border border-amber-100 p-5 rounded-2xl flex items-center justify-between">
                        <div>
                          <span className="text-[1.8rem] font-black text-amber-700">10%</span>
                          <h4 className="text-sm font-bold text-slate-700 mt-1">Next Order Discount</h4>
                        </div>
                        <div className="h-10 w-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700">
                          <Award className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    {/* Active Order Details Panel */}
                    <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/50">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4 mb-4">
                        <div>
                          <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-800 text-[0.72rem] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                            <Clock className="h-3 w-3" /> In Progress
                          </span>
                          <h3 className="text-lg font-bold text-[#1e1b4b] mt-2">AIN-9821-UK • Business Law</h3>
                          <p className="text-sm text-gray-500 mt-1">Corporate Governance & Breaches of Fiduciary Duty in the UK</p>
                        </div>
                        <div className="text-left md:text-right shrink-0">
                          <span className="text-xs text-gray-400 block">Deadline Date</span>
                          <span className="text-sm font-bold text-slate-700 block mt-0.5">July 22, 2026</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-gray-600">
                          <div>
                            <span className="text-xs text-gray-400 block">Length</span>
                            <span className="font-semibold text-slate-800 mt-0.5 block">8 Pages (approx. 2000 words)</span>
                          </div>
                          <div>
                            <span className="text-xs text-gray-400 block">Amount</span>
                            <span className="font-semibold text-slate-800 mt-0.5 block">£120.00</span>
                          </div>
                        </div>

                        <Link 
                          href="/order" 
                          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#3f159a] hover:text-purple-900 border border-[#3f159a]/20 hover:border-[#3f159a] px-3.5 py-2 rounded-xl transition"
                        >
                          <Plus className="h-3.5 w-3.5" /> Order Another Assignment
                        </Link>
                      </div>
                    </div>

                    {/* Refer Banner */}
                    <div className="bg-gradient-to-r from-purple-900 to-[#3f159a] rounded-2xl p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.08),transparent)] pointer-events-none" />
                      <div className="space-y-1.5 relative z-10">
                        <span className="bg-amber-400 text-purple-950 font-bold text-[0.7rem] px-2.5 py-0.5 rounded-full uppercase tracking-wider">Referral Program</span>
                        <h3 className="text-xl font-bold text-purple-100 leading-snug">Invite friends & get £10 Reward Voucher</h3>
                        <p className="text-purple-100 text-xs leading-relaxed max-w-md">Your friend gets 10% OFF on their first order. You get £10 voucher when their order gets completed successfully.</p>
                      </div>
                      <button 
                        onClick={() => setActiveTab("rewards")}
                        className="btn-shutter-orange-open bg-amber-500 hover:bg-amber-600 text-[#1e1b4b] text-sm font-bold px-6 py-3 rounded-xl shadow-[0_4px_15px_rgba(249,115,22,0.2)] whitespace-nowrap shrink-0 relative z-10"
                      >
                        Share Code
                      </button>
                    </div>

                  </motion.div>
                )}

                {/* 2. My Orders Tab */}
                {activeTab === "orders" && (
                  <motion.div
                    key="orders"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="flex justify-between items-center flex-wrap gap-4">
                      <div>
                        <h2 className="text-2xl font-extrabold text-[#1e1b4b]">My Orders</h2>
                        <p className="text-sm text-gray-500 mt-1">Track and manage your academic orders and files.</p>
                      </div>
                      <Link 
                        href="/order"
                        className="btn-shutter-blue-open bg-[#3f159a] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg inline-flex items-center gap-1.5"
                      >
                        <Plus className="h-3.5 w-3.5" /> Place New Order
                      </Link>
                    </div>

                    {/* Orders List Table */}
                    <div className="overflow-x-auto border border-slate-100 rounded-2xl bg-white">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            <th className="py-4 px-5">Order Details</th>
                            <th className="py-4 px-5">Progress</th>
                            <th className="py-4 px-5">Due Date</th>
                            <th className="py-4 px-5">Price</th>
                            <th className="py-4 px-5 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm text-gray-600">
                          {MOCK_ORDERS.map((order) => (
                            <tr key={order.id} className="hover:bg-slate-50/50 transition">
                              <td className="py-4 px-5">
                                <span className="font-bold text-[#1e1b4b] block">{order.id}</span>
                                <span className="text-xs text-purple-700 font-semibold block mt-0.5">{order.subject}</span>
                                <p className="text-xs text-gray-400 mt-1 max-w-xs truncate">{order.topic}</p>
                              </td>
                              <td className="py-4 px-5 whitespace-nowrap">
                                {order.status === "in-progress" && (
                                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">
                                    <Clock className="h-3.5 w-3.5" /> In Progress
                                  </span>
                                )}
                                {order.status === "under-review" && (
                                  <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">
                                    <AlertCircle className="h-3.5 w-3.5" /> Under Review
                                  </span>
                                )}
                                {order.status === "completed" && (
                                  <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                                    <CheckCircle className="h-3.5 w-3.5" /> Completed
                                  </span>
                                )}
                              </td>
                              <td className="py-4 px-5 whitespace-nowrap text-slate-700">
                                {new Date(order.deadline).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                              </td>
                              <td className="py-4 px-5 whitespace-nowrap font-bold text-slate-800">
                                {order.price}
                              </td>
                              <td className="py-4 px-5 text-right whitespace-nowrap">
                                {order.status === "completed" && order.fileUrl ? (
                                  <a 
                                    href={order.fileUrl} 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      toast.success("Downloading document...");
                                    }}
                                    className="inline-flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white font-semibold text-xs px-3 py-1.5 rounded-lg transition"
                                  >
                                    <Download className="h-3.5 w-3.5" /> Download Draft
                                  </a>
                                ) : (
                                  <button 
                                    onClick={() => toast.success("Message sent to academic writer")}
                                    className="text-xs font-bold text-[#3f159a] hover:text-purple-900 transition underline"
                                  >
                                    Message Writer
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}

                {/* 3. Edit Profile Tab */}
                {activeTab === "edit-profile" && (
                  <motion.div
                    key="edit-profile"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-2xl font-extrabold text-[#1e1b4b]">Edit Profile</h2>
                      <p className="text-sm text-gray-500 mt-1">Keep your contact and university details up to date.</p>
                    </div>

                    <form onSubmit={handleProfileUpdate} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
                          <div className="relative">
                            <input 
                              type="text" 
                              required
                              value={editForm.name}
                              onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                              className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#3f159a] transition outline-none"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
                          <div className="relative">
                            <input 
                              type="email" 
                              required
                              value={editForm.email}
                              onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                              className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#3f159a] transition outline-none"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">WhatsApp / Mobile Number</label>
                          <div className="relative">
                            <input 
                              type="text" 
                              required
                              value={editForm.phone_no}
                              onChange={(e) => setEditForm({ ...editForm, phone_no: e.target.value })}
                              className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#3f159a] transition outline-none"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Location / Country</label>
                          <div className="relative">
                            <input 
                              type="text" 
                              required
                              value={editForm.location}
                              onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                              className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#3f159a] transition outline-none"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-gray-100 flex justify-end">
                        <button 
                          type="submit"
                          className="btn-shutter-blue-open bg-[#3f159a] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition"
                        >
                          Save Profile Changes
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* 4. Rewards Tab */}
                {activeTab === "rewards" && (
                  <motion.div
                    key="rewards"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-2xl font-extrabold text-[#1e1b4b]">Rewards & Vouchers</h2>
                      <p className="text-sm text-gray-500 mt-1">Unlock credits, discount vouchers and check your points balance.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Reward Code Card */}
                      <div className="border border-purple-100 bg-purple-50/50 p-6 rounded-2xl space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 shrink-0">
                            <Award className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-800">Your Referral Code</h3>
                            <p className="text-xs text-gray-400 mt-0.5">Share with classmates for discounts</p>
                          </div>
                        </div>

                        <div className="bg-white border border-purple-200 rounded-xl p-3 flex items-center justify-between shadow-sm">
                          <span className="font-mono font-bold text-slate-700 uppercase tracking-widest pl-2">AIN-REF-419</span>
                          <button 
                            onClick={() => {
                              navigator.clipboard.writeText("AIN-REF-419");
                              toast.success("Referral code copied to clipboard!");
                            }}
                            className="text-xs font-bold text-[#3f159a] hover:text-purple-900 border border-[#3f159a]/10 hover:border-[#3f159a] px-3 py-1.5 rounded-lg transition"
                          >
                            Copy Code
                          </button>
                        </div>
                      </div>

                      {/* Points Balance Card */}
                      <div className="border border-amber-100 bg-amber-50/50 p-6 rounded-2xl flex flex-col justify-between h-full min-h-[140px]">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-slate-800">Earned Points Balance</h3>
                            <p className="text-xs text-gray-400 mt-0.5">Voucher credits earned</p>
                          </div>
                          <span className="text-xs font-bold text-amber-800 bg-amber-200/50 px-2 py-0.5 rounded-md">Silver Tier</span>
                        </div>

                        <div className="flex items-end justify-between mt-4">
                          <span className="text-3xl font-black text-amber-700">120 <span className="text-xs font-semibold text-gray-500">Points</span></span>
                          <button 
                            onClick={() => toast.success("You need 200 points to redeem a £20 voucher.")}
                            className="text-xs font-bold text-amber-800 hover:text-amber-900 border border-amber-800/10 hover:border-amber-800 px-3.5 py-2 rounded-xl transition"
                          >
                            Redeem Credit
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Active Promo Codes List */}
                    <div className="space-y-3">
                      <h3 className="font-bold text-slate-800">Your Promo Coupons</h3>
                      
                      <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-center justify-between hover:border-purple-200 transition">
                        <div className="flex items-center gap-3.5">
                          <span className="text-2xl">🎉</span>
                          <div>
                            <h4 className="font-bold text-slate-800 text-sm">40% OFF + Extra 10% OFF</h4>
                            <p className="text-xs text-gray-400 mt-0.5">Expires in 3 days • Applicable on all UK assignments</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[#3f159a] bg-purple-50 px-2.5 py-1 rounded-lg">Auto Applied</span>
                      </div>

                      <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-center justify-between hover:border-purple-200 transition">
                        <div className="flex items-center gap-3.5">
                          <span className="text-2xl">🎁</span>
                          <div>
                            <h4 className="font-bold text-slate-800 text-sm">WELCOME10 - Extra 10% Discount</h4>
                            <p className="text-xs text-gray-400 mt-0.5">First order promo coupon • Valid indefinitely</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText("WELCOME10");
                            toast.success("Coupon code copied!");
                          }}
                          className="text-xs font-bold text-slate-500 hover:text-slate-800 underline"
                        >
                          Use Code
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 5. Security Tab */}
                {activeTab === "security" && (
                  <motion.div
                    key="security"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-2xl font-extrabold text-[#1e1b4b]">Security Settings</h2>
                      <p className="text-sm text-gray-500 mt-1">Manage and update your password and authentication details.</p>
                    </div>

                    <form onSubmit={handlePasswordUpdate} className="space-y-4 max-w-md">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Current Password</label>
                        <input 
                          type="password" 
                          required
                          value={passwordForm.currentPassword}
                          onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#3f159a] transition outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">New Password</label>
                        <input 
                          type="password" 
                          required
                          value={passwordForm.newPassword}
                          onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#3f159a] transition outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Confirm New Password</label>
                        <input 
                          type="password" 
                          required
                          value={passwordForm.confirmPassword}
                          onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#3f159a] transition outline-none"
                        />
                      </div>

                      <div className="pt-3 border-t border-gray-100 flex justify-end">
                        <button 
                          type="submit"
                          className="btn-shutter-blue-open bg-[#3f159a] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition"
                        >
                          Change Password
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
