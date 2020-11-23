import React, { FC, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { getCurrentTag } from '../../../store/selectors/tag';

const ListHeader: FC = () => {
  const currentTag = useRecoilValue(getCurrentTag);
  return (
    <div className="list-header">
      <div className="logo-box">
        <p className="logo">logo</p>
      </div>
    </div>
  );
};

export default ListHeader;
