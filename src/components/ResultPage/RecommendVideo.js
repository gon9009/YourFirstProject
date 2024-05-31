import React from "react";
import useFetchVideo from "../Hooks/useFetchVideo";

// 유튜브 추천 화면
function RecommendVideo({ recommendProject }) {
  const { video, error, loading } = useFetchVideo(recommendProject);

  if (loading) {
    return <div>로딩중....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  
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
