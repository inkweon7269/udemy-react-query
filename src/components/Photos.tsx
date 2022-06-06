import React from 'react';
import {useNavigate} from 'react-router-dom';
import {usePhotos} from "../hooks/usePhotos";
import {Button, Image, Pagination, Table} from "antd";

const Photos = () => {
    const navigate = useNavigate();
    const {photos, refetch, params, setParams} = usePhotos();
    const columns = [
        {
            title: '이미지',
            dataIndex: 'webformatURL',
            render: (text: any, record: any) => <Image key={record.id} height={40} src={record.webformatURL} alt=""/>
        },
        {
            title: '사용자',
            dataIndex: 'user',
        },
        {
            title: '태그',
            dataIndex: 'tags',
        },
    ];

    const onPaginationChange = async (page: any, per_page: any) => {
        setParams({
            page: `${page}`,
            per_page: `${per_page}`,
        })
        navigate(`/?page=${page}&per_page=${per_page}`);
    }

    return (
        <div>
            <Table
                rowKey='id'
                dataSource={photos.hits}
                columns={columns}
                pagination={false}
            />

            <Pagination
                showSizeChanger={true}
                defaultCurrent={parseInt(params.page)}
                defaultPageSize={parseInt(params.per_page)}
                current={parseInt(params.page)}
                total={photos.totalHits}
                onChange={onPaginationChange}
            />

            <Button onClick={() => refetch()}>
                리페치 테스트
            </Button>
        </div>
    );
};

export default Photos;