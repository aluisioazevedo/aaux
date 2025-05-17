import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 md:px-6 max-w-[1400px] flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 [Your Name]</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <Link
            href="#"
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Twitter
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Dribbble
          </Link>
        </div>
      </div>
    </footer>
  )
}
