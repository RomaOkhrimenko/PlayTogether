import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper } from '@/components/ui/Modals/ModalWrapper/StyledComponents';

type Props = {
  open: boolean;
  children: React.ReactNode;
};

const ModalContainer = ({ open, children }: Props) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <ModalWrapper active={open}>{children}</ModalWrapper>,
        ref.current!,
      )
    : null;
};

export default ModalContainer;
