import Link from "next/link";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "primary"|"outline"; className?: string; };
export function Button({href,children,variant="primary",className=""}:Props){
  return <Link href={href} className={"btn btn--"+variant+" "+className}>{children}</Link>;
}
