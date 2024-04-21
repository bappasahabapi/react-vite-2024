import Link from "next/link";

export default function Header() {
    return (
        <nav className="flex gap-4 mb-8">
        <Link prefetch={false} className="m-0 hover:bg-blue-700   " href="/">
            Home
        </Link>
        <Link prefetch={false} className="m-0 hover:bg-blue-700   " href="/static">
            Static
        </Link>
        <Link prefetch={false} className="m-0 hover:bg-blue-700   " href="/dynamic">
            Dynamic
        </Link>
        <Link prefetch={false} className="m-0 hover:bg-blue-700   " href="/hybrid">
            Hybrid
        </Link>
        <Link prefetch={false} className="m-0 hover:bg-blue-700   " href="/isr/posts">
            ISR
        </Link>
        <Link prefetch={false} className="m-0 hover:bg-blue-700   " href="/rsc">
            RSC
        </Link>
    </nav>
    
    );
}
