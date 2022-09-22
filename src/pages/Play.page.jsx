import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";

//Components
import Poster from "../components/Poster/Poster.Component";
import PlayFilter from "../components/PlayFilters/PlayFilters.Component";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full  flex flex-col-reverse lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Plays in NCR Delhi</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-hello-zindagi-0-2022-9-5-t-9-3-30.jpg"
                  title="Hello Zindagi"
                  subtitle="Drama | Hindi | 8yrs + | 3hrs"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-mahabharata-the-epic-tale-0-2022-7-13-t-14-37-23.jpg"
                  title="Mahabharata - The Epic Tale"
                  subtitle="Drama, Mythological | Hindi | 8yrs + | 2hrs 50mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-aaeen-0-2022-9-6-t-15-30-24.jpg"
                  title="Aaeen"
                  subtitle="Drama | English, Hindi, Urdu | 8yrs + | 1hr 40mins
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-vodka-no-tonic-0-2022-8-22-t-9-50-38.jpg"
                  title="Vodka & No Tonic"
                  subtitle="Drama | English, Hindi | 1hr 20mins
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-shikaar-0-2022-9-6-t-6-20-39.jpg"
                  title="Shikaar"
                  subtitle="Drama | English, Hindi | 18yrs + | 1hr 10mins
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sawant-aunty-ki-ladkiyan-0-2022-9-7-t-7-37-33.jpg"
                  title="Sawant Aunty Ki Ladkiyan"
                  subtitle="Drama | Hindi | 12yrs + | 1hr 50mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-strictly-unconventional-0-2022-9-10-t-16-16-45.jpg"
                  title="Strictly Unconventional"
                  subtitle="Drama | English | 12yrs + | 1hr 50mins
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-what-planet-are-you-on-0-2022-9-6-t-7-19-27.jpg"
                  title="What Planet Are You On?"
                  subtitle="Drama | English | 1hr"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-raavana-in-ten-minds-0-2022-9-6-t-7-43-10.jpg"
                  title="Raavana - In Ten Minds"
                  subtitle="Drama | Hindi | 12yrs + | 1hr"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-three-timing-0-2022-9-20-t-6-59-8.jpg"
                  title="Three Timing"
                  subtitle="Theatre | English, Hindi, Punjabi | 12yrs + | 1hr 15mins
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sampoorn-ramayana-0-2022-8-23-t-5-32-16.jpg"
                  title="Sampoorn Ramayana"
                  subtitle="Drama | Hindi"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-ramlila-with-storee-ki-boree-0-2022-9-14-t-14-10-10.jpg"
                  title="Ramlila with Storee ki Boree"
                  subtitle="Theatre | Hindi | 5yrs + | 1hr 20mins
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-khidki-0-2022-9-18-t-9-42-29.jpg"
                  title="KHIDKI"
                  subtitle="Theatre | Hindi | 8yrs + | 1hr 20mins
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-mahanagar-ke-jugnu-0-2022-9-6-t-7-35-0.jpg"
                  title="Mahanagar Ke Jugnu"
                  subtitle="Drama | English, Hindi | 12yrs + | 1hr 40mins
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-hunkaro-0-2022-9-6-t-7-46-51.jpg"
                  title="Hunkaro"
                  subtitle="Drama | Haryanavi, Hindi, Marwadi, Awadhi | 12yrs + | 1hr 25mins
                  "
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-trunk-tales-0-2022-9-6-t-7-31-56.jpg"
                  title="Trunk Tales"
                  subtitle="Drama | English, Hindi, Punjabi | 16yrs + | 50mins
                  "
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlayFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
            <div>
              <PlayFilter
                title="Language"
                tags={["English", "Hindi", "Tamil", "Telugu"]}
              />
            </div>
            <div>
              <PlayFilter
                title="Categories"
                tags={["Theory", "Storytelling"]}
              />
            </div>
            <div>
              <PlayFilter
                title="Genres"
                tags={["Drama", "Comedy", "Historical", "Horror"]}
              />
            </div>
            <div>
              <PlayFilter
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

export default DefaultLayoutHoc(PlayPage);