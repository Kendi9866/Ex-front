import React from 'react';
import Slideshow from './Slideshow';
import Contact from './Contact';

function Home() {
  return (
    <section className="p-4 max-w-screen-2xl text-center h-full w-full">
      <div className="space-y-5 md:flex w-full justify-center items-center gap-2 md:gap-20">
        <div className="flex flex-col gap-4">
          <p>Aqui está o slider com fotos do maior jogador de futebol existente.</p>
          <Slideshow />
        </div>
        <Contact/>
      </div>
    </section>
  );
}

export default Home;
