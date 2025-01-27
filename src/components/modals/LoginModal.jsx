import { useState } from "react";
import { IoMdLogIn } from "react-icons/io";

export function LoginModal() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <>
      <button
        className="btn btn-sm btn-ghost rounded-full w-fit h-fit"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <IoMdLogIn size={18} className="rotate-90" />
      </button>
      <dialog id="my_modal_1" className="modal backdrop-blur-sm">
        <div className="modal-box bg-[#1A120B] border-white/10 border">
          <div className="modal-action mt-0">
            <div className="flex-1 text-center">
              <h2 className="text-3xl">
                {showLoginForm ? "Log in" : "Register now"}
              </h2>
            </div>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-xs rounded-full btn-ghost">X</button>
            </form>
          </div>
          {showLoginForm ? (
            <>
              {/* log in form */}
              <fieldset className="fieldset p-4 rounded-box">
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input w-full rounded-full bg-[#64483b] "
                  placeholder="Email"
                />

                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input w-full rounded-full bg-[#64483b] "
                  placeholder="Password"
                />

                <button className="btn btn-neutral mt-8 rounded-full bg-[#3C2A21] opacity-80">
                  Login
                </button>
              </fieldset>
              <p className="text-xs tracking-wide opacity-60">
                Don`t have an account?{" "}
                <button
                  className="underline cursor-pointer"
                  onClick={() => setShowLoginForm(false)}
                >
                  Register now
                </button>
              </p>
            </>
          ) : (
            <>
              {/* register form */}
              <fieldset className="fieldset p-4 rounded-box">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="fieldset-label">Name</label>
                    <input
                      type="text"
                      className="input w-full rounded-full bg-[#64483b]"
                      placeholder="Name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="fieldset-label">Email</label>
                    <input
                      type="email"
                      className="input w-full rounded-full bg-[#64483b]"
                      placeholder="Email"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="fieldset-label">Phone</label>
                    <input
                      type="tel"
                      className="input w-full rounded-full bg-[#64483b]"
                      placeholder="Phone"
                    />
                  </div>

                  {/* Photo (File Upload) */}
                  <div>
                    <label className="fieldset-label">Photo</label>
                    <input
                      type="file"
                      className="file-input w-full rounded-full bg-[#64483b]"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mt-4">
                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    className="input w-full rounded-full bg-[#64483b]"
                    placeholder="Password"
                  />
                </div>

                {/* Submit Button */}
                <button className="btn btn-neutral mt-8 rounded-full bg-[#3C2A21] opacity-80">
                  Register
                </button>
              </fieldset>

              <p className="text-xs tracking-wide opacity-60">
                Already have an account?{" "}
                <button
                  className="underline cursor-pointer"
                  onClick={() => setShowLoginForm(true)}
                >
                  Log in
                </button>
              </p>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
