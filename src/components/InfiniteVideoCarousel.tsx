import React, { useState } from "react";

interface Video {
  id: string;
  title: string;
}

const VIDEOS: Video[] = [
  { id: "ftU5GaDe4X0", title: "Video 1" },
  { id: "IYdfunVUUug", title: "Video 2" },
  { id: "9WNEySmUK00", title: "Video 3" },
  { id: "hsUAc1BIiug", title: "Video 4" },
  { id: "2ZWfzcMz7dM", title: "Video 5" },
  { id: "Jbdj5qtpveo", title: "Video 6" },
  { id: "wYgHix1xO4M", title: "Video 7" },
  { id: "MvX_Kal5daQ", title: "Video 8" },
  { id: "x5SMS1vc7ao", title: "Video 9" },
];

export default function InfiniteVideoCarousel() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <div className="rounded-xl relative w-full overflow-hidden bg-[#212121] py-10">
      <div className="rounded-xl  pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-24 bg-linear-to-r from-[#212121] to-transparent" />
      <div className="rounded-xl pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-24 bg-linear-to-l from-[#212121] to-transparent" />

      <div className="group flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...VIDEOS, ...VIDEOS].map((video, idx) => {
          const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

          return (
            <div
              key={`${video.id}-${idx}`}
              onClick={() => setActiveVideoId(video.id)}
              className="relative mx-3 aspect-video w-72 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#e94f37] hover:shadow-red-500/10 sm:w-80"
            >
              <img
                src={thumbnailUrl}
                alt={video.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-80 transition-opacity duration-300 hover:opacity-100 hover:bg-black/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e94f37] text-white shadow-md transition-transform duration-300 hover:scale-110">
                  <svg
                    className="ml-0.5 h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black"
            >
              ✕
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}