/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('string')).toBe(false);
  expect(convertBytesToHuman(null)).toBe(false);
  expect(Number.isNaN(convertBytesToHuman(NaN))).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0.00 B');
  expect(convertBytesToHuman(1)).toBe('1.00 B');
  expect(convertBytesToHuman(1023)).toBe('1023.00 B');
  expect(convertBytesToHuman(1024)).toBe('1.00 KB');
  expect(convertBytesToHuman(1048576)).toBe('1.00 MB');
  expect(convertBytesToHuman(1073741824)).toBe('1.00 GB');
  expect(convertBytesToHuman(1099511627776)).toBe('1.00 TB');
});

test('Возвращает false для отрицательных чисел', () => {
  expect(convertBytesToHuman(-1)).toBe(false);
  expect(convertBytesToHuman(-100)).toBe(false);
});