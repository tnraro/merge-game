export const pick = <T extends { weight: number }>(items: T[]): T => {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  const p = Math.random() * totalWeight;
  let sum = 0;
  for (const item of items) {
    sum += item.weight;
    if (p < sum) {
      return item;
    }
  }
  return items[items.length - 1];
}