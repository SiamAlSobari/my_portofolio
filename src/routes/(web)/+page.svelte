<script>
  // Bisa nanti kamu fetch API portofolio kalau mau dinamis
</script>

<style>
  /* Animasi simple fade-in */
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .fade-in-up {
    animation: fadeInUp 0.6s ease forwards;
  }
</style>

<main class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6">
  <h1 class="text-5xl font-extrabold mb-4 fade-in-up" style="animation-delay: 0.1s;">
    Hi, I&apos;m <span class="text-yellow-300">Siam Al Sobari</span>
  </h1>
  <p class="text-lg max-w-xl text-center mb-8 fade-in-up" style="animation-delay: 0.3s;">
    A passionate Backend developer focused on building beautiful and performant web apps.
  </p>

  <nav class="flex gap-6 fade-in-up" style="animation-delay: 0.5s;">
    <a
      href="/api/docs"
      class="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95"
      >Explore Me</a
    >
  </nav>

  <footer class="mt-20 text-sm opacity-80 fade-in-up" style="animation-delay: 0.7s;">
    © 2025 Siam Al Sobari — Crafted with 💜 and SvelteKit
  </footer>
</main>
