import Routes from "../../../components/Routes";
import { useRouter } from "next/router";
const NewsId = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  return (
    <div>
      <Routes></Routes>
      <h2>NewsId page {newsId}</h2>
    </div>
  );
};
export default NewsId;
