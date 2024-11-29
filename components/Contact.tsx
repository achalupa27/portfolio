import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTypewriter } from "react-simple-typewriter";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  selectActiveSection,
  selectTheme,
  setActiveSection,
} from "../redux/slices/themeSlice";
import {
  bgInvertedColors,
  borderColors,
  textInvertedColors,
  placeholder,
} from "../themes";

type Inputs = {
  email: string;
  message: string;
};

const Contact = () => {
  const theme = useAppSelector(selectTheme);
  const borderPrimary = borderColors[theme];
  const bg = bgInvertedColors[theme];
  const text = textInvertedColors[theme];
  const placeholderText = placeholder[theme];
  const activeSection = useAppSelector(selectActiveSection);

  const dispatch = useAppDispatch();
  const sectionRef = useRef(null);
  const bgInvertedColor = bgInvertedColors[theme];
  const textInvertedColor = textInvertedColors[theme];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(setActiveSection("contact"));
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [dispatch]);

  const { register, handleSubmit } = useForm<Inputs>();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsSending(true);

    const data = {
      email: formData.email,
      message: formData.message,
    };

    fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsSending(false);
        setIsSent(true);
      })
      .catch((error) => {
        console.error(error);
        setIsSending(false);
      });
  };

  // const [text, count] = useTypewriter({
  //   words: ["Interested?", "Let's Talk."],
  //   delaySpeed: 1000,
  //   loop: 1,
  // });

  return (
    <div
      ref={sectionRef}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly"
    >
      <div
        className={`mb-2 space-x-2  rounded px-2 ${
          activeSection === "contact"
            ? `${bgInvertedColor} ${textInvertedColor}`
            : ""
        }`}
      >
        <i className="fi fi-rr-envelope text-xs" />
        <span className="text-sm uppercase tracking-widest">Contact</span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex w-[350px] flex-col space-y-2 sm:w-[450px] md:w-[550px] lg:w-[700px]"
      >
        <input
          {...register("email")}
          placeholder="Email"
          className={`rounded border bg-transparent px-3 py-2 ${placeholderText} ${borderPrimary} ${
            isSent ? `cursor-not-allowed border bg-transparent` : ``
          }`}
          type="email"
          readOnly={isSent}
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className={`h-48 resize-none rounded border bg-transparent ${placeholderText} px-3 py-2 ${borderPrimary} ${
            isSent ? "cursor-not-allowed border bg-transparent" : ""
          }`}
          readOnly={isSent}
        />
        <button
          type="submit"
          className={`flex items-center justify-center rounded ${text} ${bg} py-3 shadow transition duration-500 ease-in-out ${
            isSent ? "cursor-not-allowed" : "hover:bg-green-400"
          }   ${isSending ? "cursor-wait opacity-50" : ""}`}
          disabled={isSending || isSent}
        >
          {isSent ? (
            <i className="fi fi-rr-check" />
          ) : (
            <>
              {isSending ? (
                <span className="ml-2">Sending...</span>
              ) : (
                <i className="fi fi-rr-paper-plane" />
              )}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
