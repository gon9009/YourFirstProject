import { useState, useEffect } from "react";
import axios from "axios";

// 추천 영상 패칭 커스텀 훅
function useFetchVideo(recommendProject) {
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchURL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${recommendProject.youtubekeywords}&part=snippet&type=video`;

    const fetchVideo = async () => {
      setLoading(true);
      try {
        const response = await axios.get(fetchURL);
        setVideo(response.data.items[0]);
      } catch (error) {
        setError("돋영상을 가져오는데 실패했습니다!");
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [recommendProject]);

  return { video, error, loading };
}

export default useFetchVideo;
