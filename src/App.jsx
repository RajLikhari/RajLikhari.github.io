import Content from "./features/content/Content.jsx";
import Hero from "./features/hero/Hero.jsx";

export default function App() {
  return (
    <main class="bg-zinc-900 lg:h-screen lg:overflow-hidden lg:flex">
      <div class="w-full lg:w-xl grow-0 shrink-0 lg:h-screen">
        <Hero />
      </div>
      <div class="flex-1 overflow-auto">
        <Content />
      </div>
    </main>
  );
}
