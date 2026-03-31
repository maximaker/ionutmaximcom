import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="heading-1">404</h1>
        <h2 className="heading-3">Page not found</h2>
        <p className="text-body">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-primary rounded-none font-light tracking-wider px-8 py-4 inline-block"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
