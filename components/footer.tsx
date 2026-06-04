export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Yogesh Gaur. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
