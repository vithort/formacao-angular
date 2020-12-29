import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2020-12-29 para 29/12/2020', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2020-12-29')).toEqual('29/12/2020');
  });
});
