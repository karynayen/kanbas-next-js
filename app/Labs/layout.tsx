import { ReactNode } from 'react';
import TOC from './TOC';

export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Karyna Yen - SEC 01</h2>
      <div className="mb-3">
        <TOC />
      </div>
      <div>{children}</div>
    </div>
  );
}
