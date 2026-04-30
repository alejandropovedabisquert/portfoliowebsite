import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/getDictionaries";
import HeaderNav from "./components/header/HeaderNav";
import Presentation from "./components/presentation/Presentation";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import DivisorCustom from "./components/common/divisor/DivisorCustom";
import FooterNav from "./components/footer/FooterNav";
import Stack from "./components/stack/Stack";
import Contact from "./components/contact/Contact";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();
  
  const dict = await getDictionary(lang);
  return (
    <>
      <header className="max-w-main mx-2 sticky top-0 border-l-3 border-r-3 border-l-primary border-r-primary bg-background p-4 main:p-8 main:mx-auto z-21">
        <HeaderNav dict={dict} />
      </header>
      <DivisorCustom className="sticky top-16 md:top-15 main:top-23 z-20" />
      <main className="max-w-main mx-2 border-l-3 border-r-3 border-l-primary border-r-primary p-4 main:p-8 main:mx-auto overflow-x-hidden">
        <Presentation dict={dict.portfolio.presentation} />
        <About dict={dict.portfolio.about} />
        <Experience dict={dict.portfolio.experience} />
        <Stack dict={dict.portfolio.stack} />
        <Projects dict={dict.portfolio.projects} />
        <Contact  dict={dict.portfolio.contact} />
      </main>
      <DivisorCustom />
      <footer className="max-w-main mx-2 border-l-3 border-r-3 border-l-primary border-r-primary p-4 main:p-8 main:mx-auto">
        <FooterNav dict={dict.footer} />
      </footer>
    </>
  );
}
