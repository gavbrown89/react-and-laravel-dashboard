import * as d3 from "d3";

/*
export const loadAllData = (callback = () => {} ) => {
    const q = d3.queue()
    
    q.defer(d3.tsv, './data.tsv', cast)
     
     q.await((error, data)  =>{
        callback(data);
    })   
}
*/

const MakeData = () => {
  const rnd = d3.randomNormal(180, 20);

  let data = d3
    .range(300)
    .map(i => {
      return { date: new Date(new Date().getTime() - 1000 * i), value: rnd() };
    })
    .reverse();

  return () => {
    data.push({ date: new Date(), value: rnd() });
    data.shift();

    return data;
  };
};

const md = MakeData();

export const loadAllData = (callback = () => {}) => {
  callback(md());
};