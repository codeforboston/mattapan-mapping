const fetchAll = async (urls: string[], returnErrorMessage?: undefined | string) => {
  try {
    const res = await Promise.all(
      urls.map(url => fetch(url))
    );
    return await Promise.all(res.map(r => r.json()));
  } catch {
    throw new Error(returnErrorMessage ?? 'Failed to retrieve data');
  }
}

export default fetchAll;
