import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let defaultLocale = "en";
let locales = ["en", "bn"];

function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };
  let languages = new Negotiator({ headers }).languages();

  // match() -> means if locales is in languages return locales otherwise return defaultLocale
  return match(languages, locales, defaultLocale); //en
}

export default function middleware(request) {
  //1st get the pathname from request url
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathNameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}`) && !pathname.startsWith(`/${locale}/`)
  );

  //if local is missing in the pathname
  // Redirect if there is no locale
  if (pathNameIsMissingLocale) {
    // detect user's preference & redirect with a locale with a path eg: /en/about
    const locale = getLocale(request);

    // e.g. incoming request is /photos
    // The new URL is now /en-US/photos
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
