import { Header } from "../Common/header";
import { LandingMain } from "./LandingMain";

// 1. Подключить шрифты Inter; +
// 2. Сделать выпадающее меню; разработать функцию выведения
// 3. Посмотреть миксины для мобилки;
// 4. aria label?

export default function LandingPage() {
    return (
        <>
            <Header />
            <main>
                <LandingMain />
            </main>
        </>
    )
}