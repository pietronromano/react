import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Define the route configuration for the application in an array format
// Here we specify the index route and the additional routes - in their own folders, as we will have multiple files per route later on
export default [
    index("routes/home/index.tsx"),
    route('about', './routes/about/index.tsx'),
    route('contact', './routes/contact/index.tsx'),
    route('projects', './routes/projects/index.tsx'),
    route('blog', './routes/blog/index.tsx'),

] satisfies RouteConfig;
