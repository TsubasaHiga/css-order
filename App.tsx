import * as React from 'react';
import './style.css';

const fruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian_jujube',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
  'Quince',
  'Raspberry',
  'Strawberry',
  'Tangerine',
  'Ugli_fruit',
  'Vanilla_bean',
  'Watermelon',
  'Xigua',
  'Yellow_passion_fruit',
  'Zucchini',
];

export default () => {
  return (
    <main>
      <div style={{ order: 2 }}>
        <span>order指定=2 / DOM上の順番=1</span>
        <ul></ul>
      </div>
      <div style={{ order: 1 }}>
        <span>order指定=1 / DOM上の順番=2</span>
        <ul>
          {fruits.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div style={{ order: 3 }}>
        <span>order指定=3 / DOM上の順番=3</span>
        <ul></ul>
      </div>
    </main>
  );
};
