import { colorContrast, convertColor } from './color';

describe('color', () => {
  test('colorContrast', () => {
    const results = colorContrast('#CFE3DE');
    expect(results).toEqual('#000000');
    const results2 = colorContrast('#23342E');
    expect(results2).toEqual('#ffffff');
  });
  test('convertColor', () => {
    const results = convertColor('hsl(165, 26%, 85%)', 'hex');
    const results2 = convertColor('#CFE3DE', 'rgb');
    const results3 = convertColor('rgb(207, 227, 222)', 'hsl');
    expect(results).toEqual('#CFE3DE');
    expect(results2).toEqual('rgb(207, 227, 222)');
    expect(results3).toEqual('hsl(165, 26.3%, 85.1%)');
  });
});
