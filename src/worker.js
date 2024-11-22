self.onmessage = async (event) => {
  const { assets } = event.data;

  async function fetchAsset(src) {
    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error(`Failed to fetch: ${src}`);
      console.log(response, Date.now())
      const blob = await response.blob();
      return { src, blob };
    } catch (err) {
      console.error(err);
      return { src, blob: null };
    }
  }

  async function preloadAssets(assetList) {
    const loadedAssets = {};
    for (const src of assetList) {
      const { src: key, blob } = await fetchAsset(src);
      loadedAssets[key] = blob;
    }
    return loadedAssets;
  }

  const preloaded = await preloadAssets(assets);

  // Send a message back to the main thread when done
  self.postMessage({ preloaded });
};
