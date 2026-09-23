"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
export function Reveal({children,className=""}:{children:ReactNode;className?:string}){
 const ref=useRef<HTMLDivElement>(null);const [visible,setVisible]=useState(false);
 useEffect(()=>{const node=ref.current;if(!node)return;const media=window.matchMedia("(prefers-reduced-motion: reduce)");if(media.matches){setVisible(true);return;}const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);observer.disconnect();}},{threshold:.12});observer.observe(node);return()=>observer.disconnect();},[]);
 return <div ref={ref} className={"reveal "+(visible?"is-visible ":"")+className}>{children}</div>;
}
