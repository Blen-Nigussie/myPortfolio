import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-12 pb-32 scroll-mt-20"
    >
      <div className="w-full h-full md:px-24 px-4 sm:px-8 ">
        <TitleHeader
          title="Get in Touch "
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid grid-cols-1 md:grid-cols-12 mt-10 sm:mt-16 gap-30">
          {/* Form Section */}
          <div className="md:col-span-5">
            <div className="flex-center card-border rounded-xl p-4 sm:p-6 md:p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-4 sm:gap-6"
              >
                <div>
                  <label htmlFor="name" className="text-sm sm:text-base">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    className="w-full mt-1 p-2 sm:p-3 text-sm sm:text-base rounded-lg border border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm sm:text-base">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    className="w-full mt-1 p-2 sm:p-3 text-sm sm:text-base rounded-lg border border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm sm:text-base">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="4"
                    className="w-full mt-1 p-2 sm:p-3 text-sm sm:text-base rounded-lg border border-gray-300"
                    required
                  />
                </div>

                <button type="submit" className="w-full sm:w-auto">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text text-sm sm:text-base">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* ContactExperience Section */}
          <div className="md:col-span-5 md:row-span-1 min-h-[16rem] sm:min-h-[16rem] md:min-h-[16rem]  ">
            <div className="bg-black w-full h-full hover:cursor-grab rounded-2xl sm:rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;