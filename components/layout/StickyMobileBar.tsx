import { Phone } from "lucide-react";
import { site } from "@/content/site";

export function StickyMobileBar() {
  return (
    <div className="mobile-action-bar fixed inset-x-0 bottom-0 z-[70] grid grid-cols-2 gap-2 border-t border-line bg-white p-2 md:hidden">
      <a
        className="btn btn--outline min-h-[48px] border-[rgba(16,40,79,.30)] px-3 text-[10px] tracking-[.08em] text-navy"
        href={"tel:" + site.contact.phones[0].replace(/\s/g, "")}
      >
        <Phone size={16} />
        Call
      </a>
      <a
        className="btn btn--primary min-h-[48px] px-3 text-[10px] tracking-[.08em]"
        href="#appraisal"
      >
        Book Appraisal
      </a>
    </div>
  );
}
