import Link from 'next/link';
import React from 'react';

const Links = () => {
    return (
        <>
            <div className="links_area">
                <div className="links">
                    <Link href="/pagination">pagination</Link>
                </div>
            </div>
        </>
    );
};

export default Links;