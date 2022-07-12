export const errorHandler = (context: string, err: unknown): void => {
  const error = err as Error;

  console.log(`There was an error in the ${context}:`, error);
};
