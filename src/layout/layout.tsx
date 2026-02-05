import { Link, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
        <nav className="w-full h-[160px] background-skin-color flex justify-items-center items-center">
            <div className="w-full flex mx-[10%] gap-6">
                <Link to="/" className="px-3 py-3 text-4xl color-black background-pinkish-color-hover">
                    Home
                </Link>
                <Link to="/projects" className="px-3 py-3 text-4xl color-black background-pinkish-color-hover">
                    Projects
                </Link>
                <Link to="/studies" className="px-3 py-3 text-4xl color-black background-pinkish-color-hover">
                    Studies
                </Link>
                <Link to="/experience" className="px-3 py-3 text-4xl color-black background-pinkish-color-hover">
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
