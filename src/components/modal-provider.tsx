'use client';
import { useEffect, useState } from 'react';

import { ProModal } from '@/src/components/pro-modal';

const ModalProvider = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, [])

    !mounted && null;

    return (
        <>
        <ProModal />
        </>
    )
}

export default ModalProvider;