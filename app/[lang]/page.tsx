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

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();
  
  const dict = await getDictionary(lang);
  return (
    <>
      <header className="max-w-main mx-2 border-l-3 border-r-3 border-l-primary border-r-primary p-4 main:p-8 main:mx-auto">
        <HeaderNav dict={dict.navigation} />
      </header>
      <DivisorCustom />
      <main className="max-w-main mx-2 border-l-3 border-r-3 border-l-primary border-r-primary p-4 main:p-8 main:mx-auto overflow-x-hidden">
        <Presentation dict={dict.portfolio.presentation} />
        <Experience dict={dict.portfolio.experience} />
        <Projects dict={dict.portfolio.projects} />
        <Stack dict={dict.portfolio.stack} />
        <About dict={dict.portfolio.about} />
      </main>
      <DivisorCustom className="mx-0 ml-auto mr-0" />
      <footer className="max-w-main mx-2 border-l-3 border-r-3 border-l-primary border-r-primary p-4 main:p-8 main:mx-auto">
        <FooterNav dict={dict.footer} />
      </footer>
    </>
  );
}
