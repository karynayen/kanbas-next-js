import { redirect } from 'next/navigation';
import Lab1 from './Lab1/page';

export default function Labs() {
  // return <Lab1 />;
  redirect('/Labs/Lab1');
}
