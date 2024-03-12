export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/", "/matches", "/edit", "/signup", "/messages", "/groups"],
};

// export const config = {matcher: ["/"]}
