"use client";

import useMount from "@/hooks/use-mount";

import PreviewModal from "@/components/ui/preview-modal";

const ModalProvider = () => {
  const { isMounted } = useMount();

  if (!isMounted) return null;
  return (
    <>
      <PreviewModal />;
    </>
  );
};

export default ModalProvider;
