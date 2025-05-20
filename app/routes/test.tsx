import type {Route} from "./+types/home";

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

export default async function Home({params}: Route.ComponentProps) {
    // make it cast to a function that returns a React element
    const Content = await importer(params.test!);
    return <div><Content/></div>;
}
