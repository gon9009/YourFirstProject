import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

// 유튜브 추천 화면 
function RecommendVideo({ recommendProject }) {
  const [video, setVideo] = useState(null);

  // 동영상 패칭
  useEffect(() => {
    const fetchURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${recommendProject.searchingyoutube}&part=snippet&type=video`;
    const fetchVideo = async () => {
      try {
        const response = await axios.get(fetchURL);
        setVideo(response.data.items[0]);
      } catch (err) {
        console.error("동영상을 가져오는데 실패했습니다");
      }
    };
    fetchVideo();
  }, [recommendProject]);


  return (
    <section className="recommend-video">
      {video && (
        <iframe
          width="500"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title="YouTube video player"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </section>
  );
}

export default RecommendVideo;
