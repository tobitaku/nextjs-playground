const ContactButton = () => {
  return (
    <a className="w-fit" href="mailto:me@tobiasziegler.dev">
      <button className="rounded-full px-4 py-3 text-lg font-bold text-slate-800 shadow-md hover:bg-slate-100 focus:active:bg-slate-200">
        Kontaktieren 👋
      </button>
    </a>
  );
};

export default ContactButton;
