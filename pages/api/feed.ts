import { NextApiRequest, NextApiResponse } from "next";
import { parse as rss2Json } from "rss-to-json";

const tech = "CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB";
const techNewsRss = `https://news.google.com/rss/topics/${tech}?hl=en-GB&gl=GB&ceid=GB:en`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const rss = await rss2Json(techNewsRss);
  const json = JSON.stringify(rss, null, 3);
  res.setHeader("Content-Type", "application/json");
  return res.status(200).send(json);
};

export default handler;
