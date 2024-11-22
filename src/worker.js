self.onmessage = async (event) => {
  const { action, assets } = event.data;

  async function preload3D(logoSrc) {
    try {
      const response = await fetch(logoSrc, { method: 'HEAD' });
      console.log(response)
      if (!response.ok) throw new Error(`Failed to preload 3D asset: ${logoSrc}`);
    } catch (err) {
      console.error(err);
    }
  }

  async function preloadImages(images) {
    for (const src of images) {
      try {
        const response = await fetch(src, { method: 'HEAD' });
        console.log(response)
        if (!response.ok) throw new Error(`Failed to preload image: ${src}`);
      } catch (err) {
        console.error(err);
      }
    }
  }

  // Handle different actions
  switch (action) {
    case 'preload3D':
      await preload3D(assets);
      break;
    case 'preloadImages':
      await preloadImages(assets);
      break;
    default:
      break;
  }

  // Send a message back to the main thread when done
  self.postMessage('done');
};
