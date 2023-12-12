import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { createPortal } from 'react-dom';

type Props = {
  open: boolean,
  children: React.ReactNode
}

const ModalContainer = ({ open, children }: Props) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  return (mounted && ref.current) ? createPortal(<div
    className={`${styles.modalContainer} ${open ? styles.active : ''}`}>{children}</div>, ref.current!) : null;
};

export default ModalContainer;