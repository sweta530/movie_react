import { useEffect } from "react";
import Header from "../../components/header/Header";
import HomeBanner from "./homeBanner/HomeBanner";
import { fetchDataFromApi } from "../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfig } from '../../store/homeSlice'

export default function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        temp()
    }, [])
    const temp = () => {
        fetchDataFromApi('/movie/popular')
            .then((res) => {
                console.log(res);
                dispatch(getApiConfig(res))
            })
    }
    return (
        <>
            <Header />
            <HomeBanner />
        </>
    )
}