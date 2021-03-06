import markdownStyles from './markdown-styles.module.css';
import { FC } from 'react';

type Props = {
  content: string;
};

const PostBody: FC<Props> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
