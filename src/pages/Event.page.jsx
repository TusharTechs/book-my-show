import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";

//Components
import Poster from "../components/Poster/Poster.Component";
import EventFilters from "../components/PlayFilters/EventFilters.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";

const EventPage = () => {
  return (
    <>
    <HeroCarousel />
      <div className="container mx-auto px-4 my-10">
        <div className="w-full  flex flex-col-reverse lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Movies in NCR Delhi</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isEvent={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-abhishek-upmanyu-live-0-2022-7-25-t-13-30-44.jpg"
                  title="Abhishek Upmanyu - Live"
                  subtitle="Comedy Shows | Hindi | 18yrs + | 2hrs
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isEvent={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sufi-night-traditional-nizami-brothers-0-2022-9-15-t-12-35-30.jpg"
                  title="Sufi Night - Traditional Nizami Brothers"
                  subtitle="Music Shows | Hindi | 18yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isEvent={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-gaurav-kapoor-live-0-2022-6-17-t-9-39-43.jpg"
                  title="Gaurav Kapoor LIVE"
                  subtitle="Comedy Shows | 18yrs + | 1hr
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isEvent={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sagar-wali-qawwali-ft-sagar-bhatia-0-2022-9-5-t-8-14-57.jpg"
                  title="Sagar wali Qawwali Ft. Sagar Bhatia"
                  subtitle="Music Shows | Hindi | 16yrs + | 2hrs
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isEvent={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sufi-concert-ft-prayaag-0-2022-9-16-t-13-34-44.jpg"
                  title="Sufi Concert Ft. Prayaag"
                  subtitle="Music Shows | Hindi | 16yrs + | 2hrs
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isEvent={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-nizami-brothers-live-0-2022-9-17-t-12-10-31.jpg"
                  title="Nizami Brothers Live"
                  subtitle="Music Shows | Hindi | 16yrs + | 2hrs
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isEvent={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-nishat-suri-live-0-2022-8-13-t-11-27-33.jpg"
                  title="Nishant Suri Live"
                  subtitle="Comedy | English, Hindi | 16yrs +
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isEvent={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-standup-comedy-open-mic-0-2022-5-14-t-9-35-0.jpg"
                  title="Standup Comedy Open Mic"
                  subtitle="Comedy Shows | English, Hindi | 18yrs + | 1hr 20mins
                  "
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <EventFilters
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
            <div>
              <EventFilters
                title="Language"
                tags={["English", "Hindi", "Tamil", "Telugu"]}
              />
            </div>
            <div>
              <EventFilters
                title="Categories"
                tags={["Theory", "Storytelling"]}
              />
            </div>
            <div>
              <EventFilters
                title="Price"
                tags={["Free", "0-500", "501-2000", "Above 2000"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(EventPage);