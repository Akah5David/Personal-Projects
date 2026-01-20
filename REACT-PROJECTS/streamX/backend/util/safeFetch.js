//! NOTE: I have not understood the below code
export const safeFetch = async (url, options, retries = 3) => {
  const controller = new AbortController();
  let timeout = setTimeout(() => controller.abort(), 15000); // Increased to 15s

  try {
    const res = await fetch(url, { ...options, signal: controller.signal });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    clearTimeout(timeout);
    return res;
  } catch (err) {
    clearTimeout(timeout);

    // Retry logic for network errors
    if (
      retries > 0 &&
      (err.name === "AbortError" || 
       err.message.includes("fetch failed") ||
       err.message.includes("ECONNRESET") ||
       err.message.includes("ETIMEDOUT"))
    ) {
      const delayMs = (3 - retries) * 2000; // 2s, 4s, 6s delays
      console.warn(
        `Request failed (${err.message}), retrying in ${delayMs}ms... (${retries} attempts left)`,
        url,
      );
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      return safeFetch(url, options, retries - 1);
    }

    console.error("TMDB fetch error:", err.message);
    throw err;
  }
};