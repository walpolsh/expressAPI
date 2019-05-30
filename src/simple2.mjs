let count = 0;
export function next() {
  return count++;
}
export function squared() {
  return Math.pow(count, 2);
}
export function hello(x) {
  return "hello" + x;
}
export const meaning = squared(42) + " or " + 42;

console.log(count, next, hello("sir"), meaning);
