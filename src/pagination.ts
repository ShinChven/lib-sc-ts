/**
 * Calculates the total number of pages.
 * @param total
 * @param limit
 */
export const totalPages = (total: number, limit: number) => {
  return Math.ceil(total / limit);
}
