import React from "react";
import ContactForm from "./ContactForm";

const Contact = ({ contactRef }: { contactRef: React.Ref<HTMLDivElement> }) => {
  return (
    <div
      ref={contactRef}
      className="px-6 sm:px-10 md:px-12 py-8 border-y-[2px] dark:text-white border-zinc-500 border-dashed scroll-m-28 sm:scroll-m-20"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-5 text-center">
        GET IN TOUCH WITH ME
      </h1>
      <div className="flex flex-col sm:flex-row">
        <div className="py-3 sm:py-4 sm:mt-3 px-3 sm:w-[45%]">
          <h2 className="text-xl font-medium sm:text-xl dark:text-zinc-300 text-zinc-700 ">
            Want to start a project?
            <br />
            Got any idea?
            <br />
            Don't hesitate to drop me a line!
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Let's work together to bring your vision into reality.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
