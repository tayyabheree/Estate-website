"use client";
import { useEffect,useState } from "react";
import { Phone } from "lucide-react";
import { site } from "@/content/site";
export function StickyMobileBar(){const [show,setShow]=useState(false);useEffect(()=>{const hero=document.getElementById("home");if(!hero)return;const observer=new IntersectionObserver(([entry])=>setShow(!entry.isIntersecting),{threshold:0});observer.observe(hero);return()=>observer.disconnect();},[]);if(!show)return null;return <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-white p-2 shadow-[0_-6px_18px_rgba(11,31,58,.08)] md:hidden"><a className="btn btn--outline" href={"tel:"+site.contact.phones[0].replace(/\s/g,"")}><Phone size={17}/>Call</a><a className="btn btn--primary" href="#appraisal">Book Appraisal</a></div>;}
