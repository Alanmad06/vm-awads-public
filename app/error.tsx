'use client'
import { useRouter } from 'next/compat/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ErrorBoundary ()  {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (router && router.query && router.query.error) {
            setError(router.query.error as string);
        }
    }, [router]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Error Page</h1>
            {error ? <p>{error}</p> : <p>Unknown error occurred.</p>}
            <Link href="/">
                <button>Go Back to Home</button>
            </Link>
        </div>
    );
};

