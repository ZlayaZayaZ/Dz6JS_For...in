import { orderByProps } from '../index';

test.each([
    [ {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
    ["name", "defence"],
    [
        { key: 'name', value: 'мечник' },
        { key: 'defence', value: 40 },
        { key: 'attack', value: 80 },
        { key: 'health', value: 10 },
        { key: 'level', value: 2 }
      ]],
    [ {health: 10, level: 2, attack: 80, defence: 40},
    ["name", "defence"],
    [
        { key: 'defence', value: 40 },
        { key: 'attack', value: 80 },
        { key: 'health', value: 10 },
        { key: 'level', value: 2 }
    ]],
    [ {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
    [],
    [
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
        { key: 'level', value: 2 },
        { key: 'name', value: 'мечник' }
      ]],
])('filtering an object by parameters', (obj, arr, expected) => {
    expect(orderByProps(obj, arr)).toStrictEqual(expected);
});