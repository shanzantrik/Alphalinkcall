import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrumbs({ segments }: { segments: { name: string; href?: string }[] }) {
  return (
    <nav className="text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        {segments.map((seg, idx) => (
          <li key={seg.name} className="flex items-center gap-2">
            {seg.href && idx !== segments.length - 1 ? (
              <Link href={seg.href} className="hover:underline text-blue-700 font-medium">{seg.name}</Link>
            ) : (
              <span className="font-semibold text-gray-900">{seg.name}</span>
            )}
            {idx < segments.length - 1 && <FaChevronRight className="text-gray-400 text-xs" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
