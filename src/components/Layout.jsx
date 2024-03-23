import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink'

const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to="/">Главная</CustomLink>
                <CustomLink to="/todos">Списки</CustomLink>
            </header>

            <main className="container">
                <Outlet />
            </main>

            <footer className="container">Контакты</footer>
        </>
    )
}

export {Layout}
