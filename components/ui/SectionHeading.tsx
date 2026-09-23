type Props={label:string;title:string;light?:boolean;};
export function SectionHeading({label,title,light=false}:Props){
 return <div><p className={"section-label "+(light?"section-label--light":"")}>{label}</p><h2 className={"section-title "+(light?"section-title--light":"")}>{title}</h2><div className="section-rule" aria-hidden="true"/></div>;
}
