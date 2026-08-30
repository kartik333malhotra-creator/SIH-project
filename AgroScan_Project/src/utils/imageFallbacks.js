export function getCropImageFallback(title = 'Crop Specimen', category = 'leaf') {
  const bg = category === 'pest' ? '#881337' : category === 'fertilizer' ? '#1e3a8a' : '#064e3b';
  const icon = category === 'pest' ? '🐛' : category === 'fertilizer' ? '🧪' : '🌿';
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <rect width="600" height="400" fill="${bg}"/>
    <circle cx="300" cy="180" r="80" fill="rgba(255,255,255,0.1)"/>
    <text x="300" y="200" font-size="70" text-anchor="middle" font-family="sans-serif">${icon}</text>
    <text x="300" y="320" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="sans-serif">${title.slice(0, 32)}</text>
    <text x="300" y="350" font-size="14" fill="rgba(255,255,255,0.7)" text-anchor="middle" font-family="sans-serif">AgroScan Sentinel Botanical Asset</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function handleImageError(e, title = 'AgroScan Asset', category = 'leaf') {
  e.currentTarget.onerror = null;
  e.currentTarget.src = getCropImageFallback(title, category);
}
