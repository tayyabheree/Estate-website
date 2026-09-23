import { Phone } from "lucide-react";
import { site } from "@/content/site";

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] grid h-[66px] grid-cols-2 border-t border-line bg-[#fffdf8] p-2 shadow-[0_-5px_16px_rgba(32,35,31,.08)] md:hidden">
      <a
        className="btn btn--outline min-h-0 border-navy text-navy"
        href={"tel:" + site.contact.phones[0].replace(/\s/g, "")}
      >
        <Phone size={17} />
        Call
      </a>
      <a className="btn btn--primary min-h-0" href="#appraisal">
        Book Appraisal
      </a>
    </div>
  );
}
