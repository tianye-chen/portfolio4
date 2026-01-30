export const Footer = () => {
  return (
    <div>
        {/** Footer */}
        <footer className="py-8 border-t-1 border-gray-300">
            <div className="mx-auto max-w-7xl px-4 text-center text-secondary-text">
                <p>
                    &copy; {new Date().getFullYear()} Daniel Chen. Built with love 💚, passion, and React.
                    <br />
                </p>
            </div>
        </footer>
    </div>
  );
};