import React from 'react';
import {useIsFetching, useIsMutating} from "react-query";
import {Spin} from "antd";

const Loading = () => {
    const isFetching = useIsFetching()
    const isMutating = useIsMutating();

    const display = isFetching || isMutating ? true : false;

    return (
        <Spin spinning={display} />
    );
};

export default Loading;