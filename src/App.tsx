/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, About, Experience, Skills, Projects, Contact } from './components';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111] selection:bg-[#3b82f6] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}
