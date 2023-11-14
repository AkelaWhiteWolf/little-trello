export function getObjectDeepCopy<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const copy: any = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    const value = obj[key];

    copy[key] = getObjectDeepCopy(value);
  }

  return copy as T;
}
