function nestGroupsBy(arr, properties) {
  properties = Array.from(properties);
  if (properties.length === 1) {
    return groupBy(arr, properties[0]);
  }
  const property = properties.shift();
  const grouped = groupBy(arr, property);

  for (const key in grouped) {
    grouped[key] = nestGroupsBy(grouped[key], Array.from(properties));
  }

  return grouped;
}

function groupBy(conversions, property) {
  return conversions.reduce((acc, obj) => {
    const key = obj[property];

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);

    return acc;
  }, {});
}

const groupBys = ['aaa', 'bbbbbb']
const profiles = [{
  name: 'ben',
  name: 'ben',
}];
const groups = nestGroupsBy(profiles, groupBys);
