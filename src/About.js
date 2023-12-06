import Button from "./Button";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>Halaman About</h1>
      <p>
        Ini adalah halaman about, untuk info lainnya anda bisa click link
        dibawah ini
      </p>
      <Link to="/about/team">
        <Button>Click Me!</Button>
      </Link>
      <Outlet />
    </>
  );
}
