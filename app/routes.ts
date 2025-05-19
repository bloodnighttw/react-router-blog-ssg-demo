import {type RouteConfig, index, route, prefix, layout} from "@react-router/dev/routes";

export default [
    ...prefix("/",[
        layout("routes/layout.tsx",[
            index("routes/home.tsx"),
            route("/:test", "routes/test.tsx"),
        ]),
    ]),
] satisfies RouteConfig;
