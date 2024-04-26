import React from 'react'
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./style.css";
import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './cast/Cast';
import VideoSection from './videoSection/VideoSection';

const Detail = () => {
    const { mediaType, id } = useParams();
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );

    return (
        <div>
            <DetailsBanner video={data?.results[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
            <VideoSection data={data} loading={loading} />
        </div>
    )
}

export default Detail
