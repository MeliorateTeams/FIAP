import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-purple-50">
      <div className="mx-auto px-5 py-16">
        <div className="flex justify-between items-center">
          <div className="w-16 h-16">
            <img
              className="w-full h-full object-contain"
              src="src/assets/Logo-removebg-preview.webp"
              alt="Modelado Hacendario Estatal para la Cohesión Social"
              title="Modelado Hacendario Estatal para la Cohesión Social"
            />
          </div>
          <nav>
            <Link to="/" className="text-white uppercase font-bold">Inicio      </Link>

          </nav>
        </div>
      </div>
    </header>
  );
}

