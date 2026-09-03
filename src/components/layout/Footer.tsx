import { GitBranch, Globe } from "lucide-react";
import { siteMetadata, socialLinks } from "../../data/navigationData";

export function Footer() {
  return (
    <footer>
      <span>© {siteMetadata.copyrightYear} {siteMetadata.name}</span>
      <span>{siteMetadata.availabilityStatus}</span>
      <div className="social-links" aria-label="Enlaces sociales">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            aria-label={item.name}
            target="_blank"
            rel="noreferrer"
          >
            {item.icon === "github" ? <GitBranch size={16} /> : <Globe size={16} />}
          </a>
        ))}
      </div>
    </footer>
  );
}