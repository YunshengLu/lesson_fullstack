const csv = `
name,age,parent
Bob,30,David
David,60,
Anna,10,Bob
`;
const processor = (data, delimiter = ',') => {
    data = data.trim();
    // console.log(data);
    // let csvStr = data.trim().split('\n');
    // console.log(csvStr, '----------');
    const titlesData = data.slice(0, data.indexOf('\n')) // begin end 
    // console.log(titlesData);
    const titles = titlesData.split(delimiter)
    // console.log(titles);
    const rows = data.slice(data.indexOf('\n') + 1).split('\n')
    // console.log(row);

    const rowData = rows.map(v => {
        const values = v.split(delimiter);
        return titles.reduce((obj, title, index) => {
            if (values[index]) {
                obj[title] = values[index];
            } else {
                obj[title] = ''
            }
            return obj; // 这一次的返回
        }, {})
    })
    // console.log(rowData);

    return rowData.map(row => {
        let person = {
            ...row
        }
        let parents = rowData.filter(v => v.name == row.parent)
        let children = rowData.filter(v => v.parent == row.name)

        if (parents.length) {
            person['parent'] = parents.map(parent => ({
                name: parent.name,
                age: parent.age,
            }))
        } else {
            person['parent'] = []
        }

        if(children.length) {
            person['children'] = children.map(child => ({
                name: child.name,
                age: child.age,
            }))
        } else {
            person['children'] = []
        }

        return person
    })
}

console.log(processor(csv))