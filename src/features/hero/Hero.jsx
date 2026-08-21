function Hero() {
  return (
    <section class="max-h-screen h-screen w-full flex justify-center items-center flex-col">
      <img
        class="h-6/10 w-auto object-contain"
        src="/animated-figure-gray.png"
      />
      <div class="mt-10 flex flex-col items-center">
        <h2 class="text-white text-lg">Hi there, I'm</h2>
        <h1 class="font-bold text-white text-8xl">Raj Likhari</h1>
        <h2 class="text-lg text-white bg-zinc-800 rounded-md shadow-lg p-5 mt-10">
          Software Engineer II @ American Express
        </h2>
        <div class="flex items-center gap-4 mt-4">
          <span class="relative flex h-5 w-5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
          </span>
          <span class="text-white">Based out of Houston, Texas</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
