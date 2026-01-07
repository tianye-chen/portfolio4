export const AboutMe = () => {
  return (
    <div>
      {/** About Me */}
      <section class="bg-teal-50 pb-40 pt-60">
        <div class="relative mx-auto flex items-center justify-center px-[6rem]">
          <h2 class="pointer-events-none absolute -top-[19rem] mb-8 w-full text-3xl text-[15rem] font-bold">
            <span class="opacity-8">About Me</span>
          </h2>
          <p class="mb-8 max-w-4xl text-center text-3xl font-light md:text-left">
            Hey there, thanks for stopping by! Here you can find out a bit more
            about me and what I've been working on.
          </p>
        </div>
      </section>
    </div>
  );
};
