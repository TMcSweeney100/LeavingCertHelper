import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Points Calculator", href: "/points-calculator" },
  { label: "About", href: "/about" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Top section: brand + nav */}
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">

          {/* Brand + description */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-heading text-lg font-semibold text-foreground"
            >
              CourseFinder
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Helping students explore courses and understand their options.
            </p>
          </div>

          {/* Navigation links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-2 sm:items-end">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom: copyright */}
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 CourseFinder. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
