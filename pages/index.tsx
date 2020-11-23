import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import React, { FC } from 'react';
import { getArticle } from '../store/selectors/article';
import { useRecoilValue } from 'recoil';
import ArticleList from '../components/article/list';

type Props = {
  allPosts: Post[];
};

const Index: FC<Props> = () => {
  const article = useRecoilValue(getArticle);

  return (
    <>
      <Layout>
        <div className="index-page">
          <ArticleList article={article} />
        </div>
      </Layout>
    </>
  );
};

export default Index;

// TODO: 型付け
export const getStaticProps: any = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
