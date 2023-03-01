// export default:
// - 1 module chỉ có thể export default 1 lần
// - khi ta import có thể đặt tên biến tuỳ ý và không cần dấu {}
export const PI = 3.14;
export const MAX = 99999;

export function circleArea(r) {
  return PI * r ** 2;
}
