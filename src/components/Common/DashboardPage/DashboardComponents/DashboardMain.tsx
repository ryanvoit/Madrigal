import DashboardWelcome from "./DashboardWelcome"
import DashboardTable from "./DashboardTable"
import DashboardPage from "../DashboardPage"

export function DashboardMain() {
    return (
        <div className="container">
            <DashboardWelcome />
            <DashboardTable />
           {/* <DashboardPage/>  */}
            {/* Компоненты страницы, модульное подключение*/}
            {/* Элемент - Main, то есть его содержимое */}
        </div>
    )
}