import React, { FC, useMemo } from 'react';
import ListHeader from '@/components/article/list-header';
import { isIndexRoute } from '@/services/route-validator';
import { useRouter } from 'next/router';

type Props = {
  article: { data: { data: [] } };
};

const List: FC<Props> = () => {
  const router = useRouter();
  const isRouteIndex = useMemo(() => isIndexRoute(router.pathname), [
    router.pathname,
  ]);

  return (
    <div>
      {!isRouteIndex && (
        <div className="article-list-header">
          <ListHeader />
        </div>
      )}
    </div>
  );
};

export default List;
