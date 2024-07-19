import { Conocenos } from "./ui/LandingPage/Conocenos";
import { Header } from "./ui/LandingPage/Header";
import { Servicios } from "./ui/LandingPage/Servicios";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <Conocenos/>
      <Servicios/>
    </main>
  );
}
