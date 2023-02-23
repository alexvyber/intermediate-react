export const badFibonacci = (n: number): number => {
  if (n <= 1) return 1

  return badFibonacci(n - 1) + badFibonacci(n - 2)
}
