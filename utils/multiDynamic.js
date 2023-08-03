import dynamic from "next/dynamic";

export const muiltiDynamic = (moduleLoaderArray) => {
  const promises = Promise.all(
    moduleLoaderArray.map((loader) => loader)
  );
  return moduleLoaderArray.map((m, index) =>
    dynamic(() => promises.then((results) => results[index]))
  );
};
