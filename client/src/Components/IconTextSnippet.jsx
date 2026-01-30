export const IconTextSnippet = ({ icon, title, text }) => {
  return (
    <div className="mx-auto flex h-full w-4xl flex-col items-center justify-center rounded-2xl border-3 border-border-inactive/5 p-8">
      <div className="mb-4 rounded-full bg-icon-background p-10 text-4xl text-tertiary-text">
        {icon}
      </div>
      <div className="mb-2 text-2xl">{title}</div>
      <div className="text-center text-secondary-text">
        {text}
      </div>
    </div>
  );
};
