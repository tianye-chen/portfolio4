export const Footer = () => {
  return (
    <div>
        {/** Footer */}
        <footer class="py-8 border-t-1 border-gray-300">
            <div class="mx-auto max-w-7xl px-4 text-center text-gray-500">
                <p>
                    &copy; {new Date().getFullYear()} Daniel Chen. Built with love 💚, passion, and React.
                    <br />
                </p>
            </div>
        </footer>
    </div>
  );
};