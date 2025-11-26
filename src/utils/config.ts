const isProd = process.env.NODE_ENV === "production";
export const prefix = isProd ? "/sindia-site" : "";
