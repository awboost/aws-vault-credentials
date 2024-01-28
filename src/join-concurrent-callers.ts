export function joinConcurrentCallers<Result>(
  fn: () => PromiseLike<Result>,
): () => PromiseLike<Result> {
  let current: PromiseLike<Result> | undefined;

  return async (): Promise<Result> => {
    if (current) {
      return await current;
    }
    try {
      current = fn();
      return await current;
    } finally {
      current = undefined;
    }
  };
}
