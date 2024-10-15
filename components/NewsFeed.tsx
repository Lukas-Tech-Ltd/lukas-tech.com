import React from "react";
import { useEffect } from "react";

interface NewFeedProps {
  navbarIsOpen: boolean;
}

interface NewsFeedItem {
  category: any[];
  created: number;
  description: string;
  enclosures: any[];
  id: string;
  link: string;
  media: {};
  published: number;
  title: string;
}

const NEWS_ITEM_UPDATE_INTERVAL: number = 5000;
const NEWS_FEED_UPDATE_INTERVAL: number = 60000;
const NEWS_FEED_LENGTH: number = 10;

const NewsFeed = ({ navbarIsOpen }: NewFeedProps) => {
  const [currentFeedItems, setCurrentFeedItems] = React.useState<
    NewsFeedItem[]
  >([]);
  const [currentNewsItem, setCurrentNewsItem] =
    React.useState<NewsFeedItem>(null);
  const top: string = navbarIsOpen ? "top-40" : "top-24";
  let newsItemIndex: number = 0;

  useEffect(() => {
    const updateNewsItem = () => {
      newsItemIndex++;
      newsItemIndex =
        (newsItemIndex + currentFeedItems.length) % currentFeedItems.length;
      const newsItem: NewsFeedItem =
        currentFeedItems?.at(newsItemIndex) || null;
      setCurrentNewsItem(newsItem);
    };

    updateNewsItem();
    const interval: NodeJS.Timeout = setInterval(
      updateNewsItem,
      NEWS_ITEM_UPDATE_INTERVAL
    );
    return () => clearInterval(interval);
  }, [currentFeedItems]);

  useEffect(() => {
    const getLatestFromFeed = () =>
      fetch("/api/feed")
        .then((response) => response.json())
        .then((data) => {
          setCurrentFeedItems(data.items.slice(0, NEWS_FEED_LENGTH));
        });

    getLatestFromFeed();
    const interval: NodeJS.Timeout = setInterval(
      getLatestFromFeed,
      NEWS_FEED_UPDATE_INTERVAL
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {currentNewsItem && (
        <div
          id="NewsFeed"
          className={`fixed w-full ${top} md:top-24 z-30 w-full bg-gray-800 text-white p-2 text-sm text-center`}
        >
          <span className="w-fit mr-4 inline-block align-middle">
            <a href={currentNewsItem.link} target="_blank">
              {currentNewsItem.title}
            </a>
          </span>
        </div>
      )}
    </>
  );
};

export default NewsFeed;
