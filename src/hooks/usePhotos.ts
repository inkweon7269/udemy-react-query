import {axiosInstance, getApi} from "../axiosInstance";
import {useQuery} from "react-query";
import {queryKeys} from "../react-query/constants";
import {useSearchParams} from "react-router-dom";
import {useState} from "react";

const getPhotos = async (params: any) => {
    const {data} = await axiosInstance(
        {
            params: {
                key: getApi(process.env.REACT_APP_PIXABAY_KEY),
                ...params,
            }
        }
    )

    return data;
}

export const usePhotos = () => {
    const [searchParams] = useSearchParams();
    const [params, setParams] = useState({
        page: searchParams.get('page') || '1',
        per_page: searchParams.get('limit') || '10'
    });

    const fallback = {
        hits: [],
        total: 0,
        totalHits: 0
    };

    const {data: photos = fallback, refetch} = useQuery(
        [queryKeys.photos, params],
        () => getPhotos(params),
        {
            onSuccess: (received) => {
                if (!received) {
                    console.log('데이터 없음 XXXXXX');
                } else {
                    console.log('데이터 있음 OOOOOO');
                }
            }
        }
    )

    return {photos, refetch, params, setParams};
}