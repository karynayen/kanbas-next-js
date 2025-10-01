import Link from "next/link";
export default function AccountNavigation() {
 return (
   <div id="wd-account-navigation" className="list-group wd rounded-0">
     <Link href="Signin" className="list-group-item active border-0">Signin</Link>
     <Link href="Signup" className="list-group-item border-0 text-danger">Signup</Link>
     <Link href="Profile" className="list-group-item border-0 text-danger">Profile</Link>
   </div>
 );
}
