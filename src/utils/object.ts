export const filterObjectField = <
  T extends Record<string, any>,
  K extends keyof T
>(
  originalObject: T,
  retainFields: K[]
) => {
  const newObjectEntries = Object.entries(originalObject).map(
    ([key, object]): [string, Partial<Record<K, T>>] => {
      let newObject: Partial<Record<K, T>> = {}
      retainFields.forEach((key) => {
        newObject[key] = object[key]
      })
      return [key, newObject]
    }
  )
  return revertEntries(newObjectEntries)
}

export const revertEntries = <T extends Record<string, any>, K extends keyof T>(
  entriesData: [K, T[K]][]
) => {
  let result: Partial<Record<K, T>> = {}
  entriesData.forEach(([key, value]) => {
    result[key] = value
  })
  return result
}
