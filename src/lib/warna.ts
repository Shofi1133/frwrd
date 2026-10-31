export const WARNA_HEX: Record<string, string> = {
  hitam: '#111111', putih: '#FFFFFF', biru: '#1E3A8A', 'biru muda': '#60A5FA', navy: '#14213D', 'biru dongker': '#14213D', merah: '#B91C1C', hijau: '#166534', 'hijau army': '#3F4A2A', olive: '#3F4A2A', army: '#3F4A2A', kuning: '#EAB308', oranye: '#EA580C', orange: '#EA580C', coklat: '#5A3A22', krem: '#E8E0CF', 'abu-abu': '#6B7280', abuabu: '#6B7280', 'abu muda': '#D1D5DB', pink: '#EC4899', 'merah muda': '#EC4899', ungu: '#7C3AED', maroon: '#7F1D1D', khaki: '#BFA980', beige: '#D6C7A8',
}

const normalize = (value: string) => value.trim().toLowerCase().replace(/\s+/g, ' ')
const hexToRgb = (hex: string) => { const value = hex.replace('#', ''); return [0, 2, 4].map((index) => Number.parseInt(value.slice(index, index + 2), 16)) }
const distance = (a: string, b: string) => { const [ar, ag, ab] = hexToRgb(a); const [br, bg, bb] = hexToRgb(b); return Math.sqrt((ar - br) ** 2 + (ag - bg) ** 2 + (ab - bb) ** 2) }

export function hexForColorName(name: string) { return WARNA_HEX[normalize(name)] }
export function nearestColorName(hex: string) {
  if (!/^#[0-9a-f]{6}$/i.test(hex)) return hex
  const [name, value] = Object.entries(WARNA_HEX).sort(([, a], [, b]) => distance(hex, a) - distance(hex, b))[0]
  return distance(hex, value) <= 48 ? name.replace(/\b\w/g, (letter) => letter.toUpperCase()) : hex.toUpperCase()
}
export function normalizedColorName(name: string) { return name.trim().replace(/\b\w/g, (letter) => letter.toUpperCase()) }
