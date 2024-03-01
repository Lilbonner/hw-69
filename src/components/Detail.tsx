import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchShowDetail } from '../container/showSlice.tsx';
import Search from "./Search.tsx";


function ShowDetail() {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const showDetail = useSelector((state: any) => state.tvShow.showDetail);

    useEffect(() => {
        dispatch(fetchShowDetail(id));
    }, [dispatch, id]);

    if (!showDetail) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <Search/>
            <div className='flex'>
                <img alt='img' className='ml-5 mt-10 rounded-md' src={showDetail.image.medium}/>
                <div className="mt-14 ml-6">
                    <h2 className='text-3xl '>{showDetail.name}</h2>
                    <p className='mt-4'>{showDetail.summary}</p>
                </div>
            </div>

        </div>
    );
}

export default ShowDetail;
