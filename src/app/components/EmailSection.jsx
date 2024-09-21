import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function EmailSection() {
  return (
    <section className="grid md:grid-cols-2 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB8BE] max-w-md">
          {" "}
          Aqui vai um texto explicando pras pessoas porque elas devem
          entrar em contato e tudo mais e bla bla bla entre em contato
          bla bla bla
        </p>

        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/giselleschwab">
            <span className="icon-[mdi--github] text-2xl"></span>
          </Link>
          <Link href="https://linkedin.com/in/giselleschwab">
            <span className="icon-[mdi--linkedin] text-2xl"></span>
          </Link>
        </div>
      </div>

      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block text-sm font-medium mb-3"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="exemplo@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              type="text"
              className="text-white block text-sm font-medium mb-3"
            >Assunto
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Descreva aqui"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium mb-3"
            >Assunto
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Deixe sua mensagem aqui..."
            />
          </div>
          <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection;