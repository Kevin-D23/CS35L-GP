export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/", "/matches", "/edit", "/signup"],
};

// export const config = {matcher: ["/"]}
