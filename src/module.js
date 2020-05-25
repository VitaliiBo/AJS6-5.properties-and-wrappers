/* eslint-disable linebreak-style */
/* eslint-disable guard-for-in */
function orderByProps(object, props = []) {
  const arrProps = [];
  const arrElse = [];
  const properties = props;
  for (const key in object) {
    if (properties.includes(key)) {
      arrProps[properties.indexOf(key)] = {
        key,
        value: object[key],
      };
    } else {
      arrElse.push({
        key,
        value: object[key],
      });
    }
  }
  arrElse.sort(
    (prev, next) => {
      let result;
      if (prev.key < next.key) result = -1;
      if (prev.key > next.key) result = 1;
      return result;
    },
  );
  return arrProps.concat(arrElse);
}

function getSpecials(char, i) {
  const arrSpecialProps = [];
  const { special } = char;
  for (const key in special[i]) {
    arrSpecialProps.push({
      key,
      value: special[i][key],
    });
  }
  // eslint-disable-next-line no-prototype-builtins
  if (!special[i].hasOwnProperty('description')) {
    arrSpecialProps.push({
      key: 'description',
      value: 'Описание недоступно',
    });
  }
  // console.log(arrSpecialProps);

  return arrSpecialProps;
}

export {
  orderByProps,
  getSpecials,
};
