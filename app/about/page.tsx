import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <article className="m-20 max-w-4xl mx-auto py-8 px-4 bg-white rounded-lg shadow-lg">
      <Link
        href="/"
        className="text-indigo-600 hover:underline mb-6 inline-block"
      >
        &larr; Voltar para o Blog
      </Link>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
        Sobre a Autora
      </h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 prose lg:prose-xl max-w-none text-gray-700 leading-relaxed">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
          <Image 
            src="/perfil.jpg" 
            alt="Foto de perfil de Fernanda Rosas" 
            width={192} 
            height={192} 
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mt-0">Fernanda Rosas</h2>
          <p className="mt-2">
            Olá! Meu nome é Fernanda Rosas. Sou Designer, formada pela Universidade do Sagrado Coração, e estou em transição de carreira para me tornar uma Desenvolvedora Full Stack. Este blog é um projeto pessoal onde compartilho meu progresso e aprendizados.
          </p>
          <p>
            Minhas principais competências incluem: <strong>JavaScript, Git, GitHub, React, Next.js e TypeScript.</strong>
          </p>
          <p>
            Conecte-se comigo:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <Link 
                href="https://www.linkedin.com/in/fernanda-rosas-0006b0144/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link 
                href="https://github.com/FernandaRosas9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
