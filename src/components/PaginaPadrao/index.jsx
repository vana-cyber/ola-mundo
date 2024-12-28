import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
    <main>
        <Banner />
        <Outlet />
    </main>
}