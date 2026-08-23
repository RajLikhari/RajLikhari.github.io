import Content from "./features/content/Content.jsx";
import Hero from "./features/hero/Hero.jsx";

export default function App() {
  return (
    <main class="bg-zinc-900 lg:h-screen lg:overflow-hidden lg:flex">
      <div class="w-full grow-0 shrink-0 lg:w-lg 2xl:w-2xl">
        <Hero />
      </div>
      <div class="flex-1 overflow-auto">
        <Content />
      </div>
    </main>
  );
}
