import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  ShieldCheckIcon,
  Trophy,
  Medal,
  Tv,
  MessageCircle,
  Repeat,
  BarChart2,
} from "lucide-react";
import logo from "@/public/images/sport-logo.png";
import bgImage from "@/public/images/spor-one.webp";
import CarouselSpacing from "@/components/Carousel-item";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import Link from "next/link";
export function Lobby() {
  return (
    <section className="min-h-screen  bg-cover bg-no-repeat bg-bottom">
      <div className=" bg-gradient-to-b from-black/90 from-0% via-yellow-950/40 via-60% to-black/90 to-100%">
        <div className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
          <Image
            src={bgImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            sizes="100vw"
            quality={85}
            priority
            className="max-h-[60vh] md:max-h-[70vh] lg:max-h-[80vh]"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
            style={{ mixBlendMode: "multiply" }}
          />

          <div className="absolute inset-0 mx-4 my-2 md:mx-40 flex flex-col justify-between">
            <header className="h-20 md:h-24 w-full flex justify-between items-center">
              <Image
                className=""
                src={logo}
                alt="logo"
                width={45}
                height={45}
                priority
              />
              <a
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  h-9 rounded-md px-3 bg-red-600 hover:bg-red-700"
                href="/login"
              >
                Oturum Aç
              </a>
            </header>

            {/* Centering the content */}
            <div className="flex flex-col justify-center items-center flex-grow w-full space-y-4 mt-2 mb-2">
              <h1
                className="text-center text-2xl md:text-4xl font-extrabold"
                style={{ color: "#FAFAFA" }}
              >
                Heyecana Ortak Ol!
              </h1>
              <p
                className="text-lg md:text-xl text-center font-medium"
                style={{ color: "#FAFAFA" }}
              >
                Watch anywhere. Cancel anytime.
              </p>
              <p
                className="text-base md:text-lg text-center mt-2 mx-4 font-medium"
                style={{ color: "#FAFAFA" }}
              >
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>

              <form className="w-full flex flex-col md:flex-row justify-center items-center md:items-start mt-4 gap-x-2 gap-y-4">
                <div className="space-y-2">
                  <input
                    className="shadow-sm transition-colors flex rounded-md border border-input px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-72 md:w-80 h-12 md:h-14 bg-neutral-900/70 text-[14px] md:text-[16px]"
                    placeholder="E-posta Adresiniz"
                    autoComplete="off"
                    type="email"
                    name="email"
                    style={{ color: "#FAFAFA" }}
                  />
                </div>
                <Link href="/signup">
                  <button
                    className=" shadow py-2 whitespace-nowrap rounded-md text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 h-12 md:h-14 w-40 md:w-48 text-base md:text-lg font-semibold bg-red-600 hover:bg-red-700 flex justify-between items-center px-6"
                    type="submit"
                  >
                    Başlayın
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right ml-2"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-black lg:py-40 pb-20">
        <div className="container mx-auto">
          <CarouselSpacing />
        </div>
      </section>

      <section className="bg-black md:py-32 lg:py-40">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl md:text-4xl text-center text-white font-bold mb-8">
              Futbol Tutkunları İçin Özellikler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-black p-6 w-full h-full border border-white rounded-lg flex flex-col items-center shadow-lg">
                <Tv className="w-16 h-16 mb-4 text-red-600" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Canlı Maç Yayınları
                </h3>
                <p className="text-white text-center">
                  Tüm büyük liglerin maçlarını HD kalitesinde canlı izleyin.
                </p>
              </div>

              <div className="bg-black p-6 w-full h-full border border-white rounded-lg flex flex-col items-center shadow-lg">
                <Repeat className="w-16 h-16 mb-4 text-red-600" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Maç Tekrarları
                </h3>
                <p className="text-white text-center">
                  Kaçırdığınız maçları ve önemli anları tekrar izleyin.
                </p>
              </div>

              <div className="bg-black p-6 w-full h-full border border-white rounded-lg flex flex-col items-center shadow-lg">
                <BarChart2 className="w-16 h-16 mb-4 text-red-600" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Detaylı İstatistikler
                </h3>
                <p className="text-white text-center">
                  Oyuncu ve takım performanslarını detaylı istatistiklerle
                  analiz edin.
                </p>
              </div>

              <div className="bg-black p-6 w-full h-full border border-white rounded-lg flex flex-col items-center shadow-lg">
                <MessageCircle className="w-16 h-16 mb-4 text-red-600" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Taraftar Sohbetleri
                </h3>
                <p className="text-white text-center">
                  Maç sırasında diğer taraftarlarla canlı sohbet edin ve
                  tartışın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl text-center text-white font-bold mb-8">
            Sıkça Sorulan Sorular
          </h2>
          <FAQAccordion />
        </div>
      </section>
    </section>
  );
}
