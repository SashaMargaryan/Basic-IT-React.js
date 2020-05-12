const arr = [
    {
        key : 'a',
        value : '1'
    },
    {
        key : 'a',
        value : '2'
    },
    {
        key : 'b',
        value : '1'
    },
    {
        key : 'c',
        value : '1'
    },
    {
        key : 'c',
        value : '2'
    },
];
const x = [
    {
        key: 'a',
        count: 2,
        value: []
    }
]
const result = arr.reduce((acc, cur) => {
    if(acc.some(item => item.key === cur.key)) {
        acc.forEach((item, index) => {
            if(item.key === cur.key) {
                acc[index] = {
                    key: cur.key,
                    count: item.count + 1,  
                    value: item.values.includes(cur.value) ? item.values : [...item.values, cur.value]
                }
            }
        });
        return acc
    }
    return [
        ...acc,
        {
            key: cur.key,
            count: 1,
            values: [cur.value]
        }
    ]
}, [])

console.log(arr)
console.log(result)