import { Link, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
        <nav className="w-full h-[160px] bg-gray-800 flex justify-items-center items-center">
            <div className="w-full flex mx-[10%] gap-6">
                <Link to="/" className="rounded-md px-3 py-3 text-4xl hover:bg-white/5">
                    Home
                </Link>
                <Link to="/projects" className="rounded-md px-3 py-3 text-4xl hover:bg-white/5">
                    Projects
                </Link>
                <Link to="/studies" className="rounded-md px-3 py-3 text-4xl hover:bg-white/5">
                    Studies
                </Link>
                <Link to="/experience" className="rounded-md px-3 py-3 text-4xl hover:bg-white/5">
                    Experience
                </Link>
            </div>
        </nav>
        <main className="w-full m-5 max-w-7xl mx-auto">
            <Outlet />
        </main>
    </>
  )
}
