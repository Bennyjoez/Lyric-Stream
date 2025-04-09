import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/names", "routes/names.tsx"),
  route("/gospel", "routes/gospel.tsx"),
  route("/country", "routes/country.tsx"),
  route("/pop", "routes/pop.tsx"),
  route("/blues", "routes/blues.tsx"),
  route("/rock", "routes/rock.tsx"),
] satisfies RouteConfig;
