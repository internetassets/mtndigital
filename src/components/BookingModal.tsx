
"use client";

import Script from 'next/script';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ReactNode } from 'react';

interface BookingModalProps {
  trigger: ReactNode;
}

export function BookingModal({ trigger }: BookingModalProps) {
  const iframeId = "1N973hnHsYsJ7Q66OYYB_booking_calendar";

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[700px] xl:max-w-[900px] p-0 overflow-hidden min-h-[70vh] flex flex-col">
        {/* The iframe container will take up all available space within the DialogContent */}
        <div className="flex-grow">
          <iframe
            src="https://api.internet-assets.com/widget/booking/1N973hnHsYsJ7Q66OYYB"
            style={{ width: '100%', height: '100%', border: 'none', overflow: 'auto' }} // allow overflow for calendar
            scrolling="yes" // allow scrolling within iframe
            id={iframeId}
            title="Booking Calendar"
            allowFullScreen
          ></iframe>
        </div>
        {/* The script should be loaded to make the iframe work correctly. */}
        <Script
          src="https://api.internet-assets.com/js/form_embed.js"
          strategy="lazyOnload"
          onLoad={() => {
            // console.log('Booking embed script loaded.');
            // The script should automatically find and initialize the iframe with the matching ID
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
