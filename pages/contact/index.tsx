import axios, { AxiosError } from "axios";
import React, { ChangeEvent, FormEvent, useEffect } from "react";

interface IContactFormState {
  name: string;
  email: string;
  message: string;
  submitted: boolean;
  feedback: string;
  error: string;
}

export default function Contact() {
  const [state, setState] = React.useState<IContactFormState>({
    name: "",
    email: "",
    message: "",
    submitted: false,
    feedback: "",
    error: "",
  });

  const updateState = (partial: Partial<IContactFormState>) => {
    setState(Object.assign({}, state, partial));
  };

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    axios
      .post("/api/form-send", {
        name: state.name,
        email: state.email,
        message: state.message,
      })
      .then((res) => {
        if (res.data.status === 200) {
          updateState({ submitted: true, feedback: res.data.feedback });
        } else {
          updateState({ submitted: true, error: res.data.message });
        }
      })
      .catch((error: AxiosError<{ error: string }>) => {
        updateState({ error: error.response.data.error });
      });
  };

  return (
    <>
      <div className="max-w-5xl mx-auto px-10 py-56">
        <p className="py-5">
          Please let us know what you'd like to talk about and we'll get back in
          touch!
        </p>
        <form onSubmit={formSubmitHandler}>
          <div className="pt-0 mb-3">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateState({
                  name: event.target.value,
                  submitted: false,
                  feedback: "",
                })
              }
            />
          </div>
          <div className="pt-0 mb-3">
            <input
              type="email"
              placeholder="you@yourdomain.com"
              name="email"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateState({
                  email: event.target.value,
                  submitted: false,
                  feedback: "",
                })
              }
            />
          </div>
          <div className="pt-0 mb-3">
            <textarea
              placeholder="Your message"
              name="message"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                updateState({
                  message: event.target.value,
                  submitted: false,
                  feedback: "",
                })
              }
            />
          </div>
          <div className="pt-0 mb-3">
            <button
              className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none disabled:bg-gray-600"
              disabled={state.submitted}
              type="submit"
            >
              Send message
            </button>
            <span className="text-red-600">{state.error && state.error}</span>
            <span className="text-gray-600">
              {state.feedback && state.feedback}
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
