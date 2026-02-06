import { Link, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
        <nav className="py-[30px] md:py-[70px] background-skin-color flex items-center">
            <div className="md:flex gap-6 grid grid-col-1 justify-items-center mx-auto lg:mx-[10%]">
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
        <main className="mt-10 mx-20">
            <Outlet />
        </main>
    </>
  )
}
