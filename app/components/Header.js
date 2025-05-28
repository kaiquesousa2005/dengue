export default function Header() {
  return (
    <header className="w-full bg-red-600 py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold">🦟 Casos da Dengue</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">Início</a>
          <a href="/login" className="hover:underline">Login</a>
          <a href="/register" className="hover:underline">Cadastro</a>
        </nav>
      </div>
    </header>
  )
}
