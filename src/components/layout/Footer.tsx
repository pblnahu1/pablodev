import { GitBranch, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer>
      <span>© 2024 Pablo Dev</span>
      <span>Available for selected projects</span>
      <div className="social-links">
        <a href="https://github.com" aria-label="GitHub"><GitBranch size={17} /></a>
        <a href="https://pablo.dev" aria-label="Web personal"><Globe size={17} /></a>
      </div>
    </footer>
  );
}