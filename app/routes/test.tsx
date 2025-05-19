import type {Route} from "./+types/home";
import {MDXProvider} from "@mdx-js/react";

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

export async function loader({params}: Route.MetaArgs) {

    const content = await importer(params.test!);
    return content();

}

export async function clientLoader({params, serverLoader}: Route.ClientLoaderArgs){

    const content = await serverLoader();

}

export default function Home({loaderData}: Route.ComponentProps) {

    const content = loaderData;
    return <div><MDXProvider>{content}</MDXProvider></div>;
}
