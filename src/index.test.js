/* eslint-disable linebreak-style */
/* eslint-disable indent */
import { orderByProps, getSpecials } from './module';

test('orderByProps', () => {
    const testChar = {
        a: 4,
        b: 3,
        c: 'xxx',
        d: 5,
        e: 1,
    };
    expect(orderByProps(testChar, ['c', 'b'])).toStrictEqual(
        [
            { key: 'c', value: 'xxx' },
            { key: 'b', value: 3 },
            { key: 'a', value: 4 },
            { key: 'd', value: 5 },
            { key: 'e', value: 1 },
        ],
    );
});

test('getSpecials', () => {
    const testChar = {
        name: 'Dummy',
        special: [
          {
            id: 1,
            name: 'xxx',
            icon: 'http://...',
            description: 'aaa',
          },
          {
            id: 2,
            name: 'yyy',
            icon: 'http://...',
            // <- обратите внимание, описание "засекречено"
          },
        ],
    };
    expect(getSpecials(testChar, 1)).toStrictEqual(
        [
            { key: 'id', value: 2 },
            { key: 'name', value: 'yyy' },
            { key: 'icon', value: 'http://...' },
            { key: 'description', value: 'Описание недоступно' },
        ],
    );
});
