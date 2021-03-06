import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage: FC<Props> = ({ title, src, slug }) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
