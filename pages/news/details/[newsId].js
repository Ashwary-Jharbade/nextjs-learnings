import Route from "../../../componnents/Route";
import { useRouter } from "next/router";

const NewsId = () => {
  const router = useRouter();
  const newsid = router.query.newsId;
  return (
    <div>
      <Route></Route>
      <h2>News detail with id: {newsid}</h2>
    </div>
  );
};

export default NewsId;
