import type { Route } from "./+types/home";
import {Link, useNavigate} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
    return <Link to={{
        pathname: "/test",
    }}>123</Link>;
}
