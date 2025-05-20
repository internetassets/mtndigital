
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

interface BookingModalProps {
  trigger: ReactNode;
}

export function BookingModal({ trigger }: BookingModalProps) {
  // The widget ID from the src URL
  const widgetId = "1N973hnHsYsJ7Q66OYYB";
  // A consistent ID for the iframe, incorporating the widgetId.
  // The external script is expected to find and initialize this iframe.
  const iframeId = `${widgetId}_booking_embed`;

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[700px] xl:max-w-[900px] p-0 overflow-y-auto max-h-[90vh]">
        <DialogTitle className="sr-only">Booking Calendar</DialogTitle>
        <DialogDescription className="sr-only">
          A calendar for booking appointments.
        </DialogDescription>
        {/*
          The iframe's height is expected to be set by the form_embed.js script.
          - width: '100%' makes it responsive horizontally.
          - border: 'none' removes default iframe border.
          - overflow: 'hidden' and scrolling="no" assume the script adjusts height to fit content, avoiding iframe scrollbars.
          - display: 'block' helps prevent unexpected spacing issues.
          - minHeight: provides a sensible default height before the script loads or if it fails to resize.
          The DialogContent has overflow-y-auto and max-h-[90vh] to allow scrolling if the iframe becomes very tall.
        */}
        <iframe
          src={`https://api.internet-assets.com/widget/booking/${widgetId}`}
          style={{
            width: '100%',
            border: 'none',
            overflow: 'hidden',
            display: 'block',
            minHeight: '600px', // Sensible minimum height
          }}
          scrolling="no"
          id={iframeId}
          title="Booking Calendar" // Keeping the iframe title as well for direct iframe accessibility
        ></iframe>
        <Script
          src="https://api.internet-assets.com/js/form_embed.js"
          strategy="lazyOnload"
          onLoad={() => {
            // console.log('Booking embed script loaded. It should find and initialize iframe with id:', iframeId);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
