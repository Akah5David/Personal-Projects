    export const safeFetch = async (url, options, retries = 2) => {
      try {
        const res = await fetch(url, options);

        if (!res.ok && retries > 0) {
          return safeFetch(url, options, retries - 1);
        }

        return res;
      } catch (err) {
        if (retries === 0) throw err;
        return safeFetch(url, options, retries - 1);
      }
    };