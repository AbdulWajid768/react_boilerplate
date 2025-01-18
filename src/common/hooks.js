import { useEffect, useState } from 'react';
import { labels, local } from 'common';

export const hooks = {
  useToken: () => {
    const [accessToken, setTokens] = useState(local.getAccessToken());

    const saveTokens = (tokens) => {
      if (tokens) {
        local.storeTokens(tokens);
        setTokens(tokens.access);
      }
    };

    return {
      setTokens: saveTokens,
      accessToken,
    };
  },
  usePageTitle: (title) => {
    useEffect(() => {
      document.title = `${labels.APP} - ${title}`;
    }, [title]);
    return null;
  },

  useScrollToTop: () => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, []);
  },
};
