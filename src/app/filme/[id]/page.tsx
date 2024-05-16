
import { Button } from "@/app/components/button";
import { NavBar } from "@/app/components/navbar";
import { ArrowLeft, Link, Youtube } from "lucide-react";

export default function Detalhe() {
  return ( 
    <main className="flex min-h-screen flex-col">
      
      <NavBar />
      
      <section className="flex p-12 gap-9 bg-[url('https://image.tmdb.org/t/p/original/pwkrLGX3krLevo5Ua8Eq71fXIwr.jpg')] ">
        <div className="w-[300px] rounded overflow-hidden">
          <img src="https://media.themoviedb.org/t/p/w220_and_h330_face/boObGdocQS07Nu7IrettgA5oRTp.jpg" alt="" />
        </div>

        <div className="flex flex-col gap-9 w-3/5">
          <h2 className="text-4xl font-bold">Título do Filme</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quibusdam culpa minus. Vel reiciendis sunt dicta, ratione rem, asperiores rerum ex sint porro, nihil quaerat molestias esse recusandae explicabo provident!</p>
        </div>
      </section>

      <section className="flex gap-6 m-4">
        <Button label="voltar" href="/" icon={<ArrowLeft />} />
        <Button label="site" href="/" icon={<Link />} />
        <Button label="trailer" href="/" icon={<Youtube />} />
      </section>

    </main>
  );
}
