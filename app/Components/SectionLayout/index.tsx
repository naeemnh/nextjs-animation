import { ReactNode, RefObject } from "react";

interface SectionLayoutProps {
  children: ReactNode;
  ref?: RefObject<HTMLDivElement>;
}

export default function SectionLayout({ children, ref }: SectionLayoutProps) {
  return (
    <section
      style={{
        padding: "5rem 10rem",
      }}
    >
      {children}
    </section>
  );
}