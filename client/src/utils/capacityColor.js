export function getCapacityColor(joined, capacity) {
  const percent = (joined / capacity) * 100;

  if (percent >= 100) return 'var(--color-capacity-full)';
  if (percent >= 70) return 'var(--color-capacity-mid)';
  return 'var(--color-capacity-low)';
}