// Carousel.js
import React, { useRef } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
// import CircleRating from "../circleRating/CircleRating";
// import Genres from "../genres/Genres";

const useStyles = makeStyles((theme) => ({
    carousel: {
        position: "relative",
        overflowX: "auto",
        padding: theme.spacing(2, 0),
    },
    carouselTitle: {
        marginBottom: theme.spacing(1),
    },
    carouselItems: {
        display: "flex",
        alignItems: "center",
        "& > *": {
            flex: "0 0 auto",
            marginRight: theme.spacing(2),
        },
    },
    arrow: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderRadius: "50%",
        zIndex: 1,
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
        },
    },
}));

const Carousel = ({ data, loading, endpoint, title }) => {
    const classes = useStyles();
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const navigation = (dir) => {
        const container = carouselContainer.current;
        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    const skItem = () => {
        return (
            <Grid item xs={3}>
                {/* Your skeleton item content */}
            </Grid>
        );
    };

    return (
        <div className={classes.carousel}>
            <ContentWrapper>
                {title && (
                    <Typography variant="h6" className={classes.carouselTitle}>
                        {title}
                    </Typography>
                )}
                <IconButton
                    className={`${classes.arrow} carouselLeftNav arrow`}
                    onClick={() => navigation("left")}
                >
                    <BsFillArrowLeftCircleFill />
                </IconButton>
                <IconButton
                    className={`${classes.arrow} carouselRightNav arrow`}
                    onClick={() => navigation("right")}
                >
                    <BsFillArrowRightCircleFill />
                </IconButton>
                {!loading ? (
                    <div className={classes.carouselItems} ref={carouselContainer}>
                        {data?.map((item) => {
                            const posterUrl = item.poster_path
                                ? url.poster + item.poster_path
                                : PosterFallback;
                            return (
                                <div
                                    key={item.id}
                                    className="carouselItem"
                                    onClick={() =>
                                        navigate(`/${item.media_type || endpoint}/${item.id}`)
                                    }
                                >
                                    <div className="posterBlock">
                                        <Img src={posterUrl} />
                                        {/* <CircleRating rating={item.vote_average.toFixed(1)} />
                                        <Genres data={item.genre_ids.slice(0, 2)} /> */}
                                    </div>
                                    <div className="textBlock">
                                        <Typography variant="body1" className="title">
                                            {item.title || item.name}
                                        </Typography>
                                        <Typography variant="body2" className="date">
                                            {dayjs(
                                                item.release_date || item.first_air_date
                                            ).format("MMM D, YYYY")}
                                        </Typography>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <Grid container spacing={2}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <React.Fragment key={index}>{skItem()}</React.Fragment>
                        ))}
                    </Grid>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Carousel;
