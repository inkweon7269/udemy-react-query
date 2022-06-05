import {axiosInstance, getApi} from "../axiosInstance";
import {useQuery} from "react-query";
import {queryKeys} from "../react-query/constants";

const getPhotos = async (params: any) => {
    const {data} = await axiosInstance.get(
        'https://pixabay.com/api',
        {
            params: {
                key: getApi(process.env.REACT_APP_PIXABAY_KEY),
                ...params,
            }
        }
    )

    return data;
}

export const usePhotos = (params: any) => {
    const fallback = {
        hits: [],
        total: 0,
        totalHits: 0
    };

    const { data: photos = fallback, refetch } = useQuery(
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

    return { photos, refetch };
}