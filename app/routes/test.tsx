import type {Route} from "./+types/home";
import {MDXProvider} from "@mdx-js/react";
import type {ReactElement} from "react";

export function meta({params}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const importer = async (path: string) => {
    //@ts-ignore
    return (await import((`../welcome/${path}.mdx`))).default;
}

export async function clientLoader({params}: Route.MetaArgs): Promise<()=> ReactElement>{

    //@ts-ignore
    return (await import((`../welcome/${params.test}.mdx`))).default;

}

export default function Home({loaderData}: Route.ComponentProps) {

    // make it cast to a function that returns a React element
    const Content = loaderData as unknown as () => ReactElement;
    return <div><MDXProvider><Content/></MDXProvider></div>;
}
