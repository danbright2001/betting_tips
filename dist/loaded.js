class myNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="py-4 bg-blue-900/90 sticky top-0 z-30 border-b-2 border-gray-300 w-full backdrop-blur-lg">
        <div class="container mx-auto px-5 flex items-center justify-between">
          <h1 class="text-2xl text-transparent font-bold inline-block bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text"><a href="index.html">Fixed-254</a></h1>
          <ul class="hidden absolute md:static  md:flex-row  top-0 right-0 bg-gray-900 md:bg-transparent  md:flex items-center space-y-8 md:space-y-0 p-8   md:p-0 md:space-x-7 navbar mt-[70px] md:mt-0 flex-col  w-[80%] md:w-auto h-auto">
            <li class="w-full md:w-auto text-center"><a href="./#daily" class="text-yellow-500 text-xl font font-semibold  text-center">Daily Tips</a></li>
            <li class="w-full md:w-auto text-center"><a href="./#fixed" class="text-yellow-500 text-xl font font-semibold text-center">Fixed Tips</a></li>
            <li class="w-full md:w-auto text-center"><a href="./#contact" class="text-yellow-500 text-xl font font-semibold text-center">Contact Us</a></li>
          </ul>
          <button class="md:hidden text-white font-semibold text-3xl navToggle">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
    `
  }
}
customElements.define('my-nav', myNav)

class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-slate-950 text-white py-10">
        <div class="container mx-auto px-5">
          <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 place-items-center">

            <!-- Quick Links -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Quick Links</h4>
              <ul class="space-y-4">
                <li><a href="./#daily" class="hover:text-yellow-500">Daily Tips</a></li>
                <li><a href="./#fixed" class="hover:text-yellow-500">Fixed Tips</a></li>
                <li><a href="./signupage.html" class="hover:text-yellow-500">More</a></li>
              </ul>
            </div>
            
            <!-- Social Media Links -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Follow Us</h4>
              <div class="flex space-x-4">
                <a href="https://facebook.com" target="_blank" class="text-3xl hover:text-yellow-500">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://wa.me/0712491052" target="_blank" class="text-3xl hover:text-yellow-500">
                  <i class="fab fa-whatsapp"></i>
                </a>
                <a href="https://t.me/yourtelegramlink" target="_blank" class="text-3xl hover:text-yellow-500">
                  <i class="fab fa-telegram"></i>
                </a>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Contact Us</h4>
              <ul class="space-y-2">
                <li>
                  <a href="mailto:netchucker254@gmail.com" class="hover:text-yellow-500">Email: netchucker254@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+254712491052" class="hover:text-yellow-500">Phone: 0712491052</a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Copyright -->
          <div class="mt-8 text-center">
            <p class="text-sm text-gray-400">&copy; 2025 Your Website. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `
  }
}
customElements.define('my-footer', myFooter)