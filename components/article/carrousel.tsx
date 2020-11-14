import { FC, useMemo } from 'react';
import { Transition } from 'react-transition-group';

// TODO: 型付け
type Props = {
  article: { data: { data: [] } };
};

const Carrousel: FC<Props> = ({ article }) => {
  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles: any = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const articleList = useMemo(() => {
    return [...article.data.data].slice(0, 9);
  }, [article]);

  return (
    <div className="carrousel">
      <Transition timeout={duration}>
        {(state: string | number) => (
          <div
            className="swiper index"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}>
            <div className="swiper-wrapper">
              {articleList.map(() => (
                <div key="index" className="swiper-slide">
                  <div className="content">
                    <a href="`/article/${_article.id}`" className="link">
                      <img
                        src="getThumb(_article.thumb)"
                        alt="_article.title"
                      />
                      <span className="title">title</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Transition>
      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" />
    </div>
  );
};

export default Carrousel;
