
"use client";

import Script from 'next/script';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import type { ReactNode } from 'react';

interface ContactFormModalProps {
  trigger: ReactNode;
}

export function ContactFormModal({ trigger }: ContactFormModalProps) {
  const formId = "2OCDKAJYPIaTVWpgznK2";
  const iframeId = `inline-${formId}`; // Matches the id in the provided iframe code

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[600px] xl:max-w-[700px] p-0 overflow-y-auto max-h-[90vh]">
        <DialogTitle className="sr-only">Contact Us</DialogTitle>
        <DialogDescription className="sr-only">
          A contact form to send a message.
        </DialogDescription>
        <iframe
          src="https://api.internet-assets.com/widget/form/2OCDKAJYPIaTVWpgznK2"
          style={{
            width:'100%',
            border:'none',
            borderRadius:'4px',
            overflow: 'hidden',
            display: 'block',
            minHeight: '487px', // Based on data-height from provided code
          }}
          id={iframeId}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Internet Assets New Lead SHOW LOW"
          data-height="487"
          data-layout-iframe-id={iframeId}
          data-form-id={formId}
          title="Internet Assets New Lead SHOW LOW"
          scrolling="no"
        ></iframe>
        <Script
          src="https://api.internet-assets.com/js/form_embed.js"
          strategy="lazyOnload"
        />
      </DialogContent>
    </Dialog>
  );
}
